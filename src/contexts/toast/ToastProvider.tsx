import { ReactNode, useCallback, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { Toast, ToastProps } from '../../types'
import { ToastContext } from './'

const DEFAULT_DURATION = 5000

/**
 * Provides the Toast context to the rest of the application.
 * This provider manages the state of toasts and handles their lifecycle (adding, removing, and timing out).
 * - Stores and displays toast notifications.
 * - Automatically removes toasts after a specified duration.
 * - Provides methods to trigger different types of toasts (`success`, `error`, `info`, `warning`).
 * @param children The components to be wrapped by the `ToastProvider`.
 * @returns The `ToastProvider` component which provides the toast context to its children.
 */
export const ToastProvider = ({ children }: { children: ReactNode }) => {
  const [toast, setToast] = useState<Toast[]>([])
  const [timer, setTimer] = useState<Map<string, ReturnType<typeof setTimeout>>>(new Map())

  const removeToast = useCallback((id: Toast['id']) => {
    setToast((prevToast) =>
      prevToast.map((toast) =>
        toast.id === id ? { ...toast, status: false } : toast
      )
    )

    if (timer.has(id)) {
      clearTimeout(timer.get(id))

      setTimer((prevTimers) => {
        const newTimers = new Map(prevTimers)
        newTimers.delete(id)
        return newTimers
      })

    }

    setTimeout(() => {
      setToast((prevToast) => prevToast.filter((toast) => toast.id !== id))
    }, 1000)
  }, [timer])

  const addToast = useCallback((toast: Omit<Toast, 'id' | 'status'>) => {
    const id = uuidv4()
    const newToast: Toast = { ...toast, id, status: true, duration: toast.duration || DEFAULT_DURATION }
    const timeout = setTimeout(() => removeToast(id), newToast.duration)

    setToast((prevToast) => [...prevToast, newToast])
    setTimer((prevTimers) => new Map(prevTimers).set(id, timeout))
  }, [removeToast])


  const toastMethod = (type: Toast['type']) => {
    return (props: ToastProps) => {
      return addToast({ ...props, type })
    }
  }

  const success = toastMethod('success')
  const error = toastMethod('error')
  const info = toastMethod('info')
  const warning = toastMethod('warning')

  return (
    <ToastContext.Provider value={{ toast, addToast, removeToast, success, error, info, warning }}>
      {children}
    </ToastContext.Provider>
  )
}
