import { ReactNode, useCallback, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { Toast, ToastProps } from '../../types'
import { ToastContext } from './'

const DEFAULT_DURATION = 3000

export const ToastProvider = ({ children }: { children: ReactNode }) => {
  const [toasts, setToasts] = useState<Toast[]>([])

  const removeToast = useCallback((id: string) => {
    setToasts((prevToasts) =>
      prevToasts.map((toast) =>
        toast.id === id ? { ...toast, status: false } : toast))

    setTimeout(() => {
      setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id))
    }, 500)
  }, [])

  const addToast = useCallback((toast: Omit<Toast, 'id' | 'status'>) => {
    const id = uuidv4()
    const newToast: Toast = {
      ...toast,
      id,
      status: false,
      duration: toast.duration || DEFAULT_DURATION,
    }

    setToasts((prevToasts) => [...prevToasts, newToast])

    setTimeout(() => {
      setToasts((prevToasts) =>
        prevToasts.map((toast) =>
          toast.id === id ? { ...toast, status: true } : toast))
    }, 50)

    setTimeout(() => removeToast(id), newToast.duration)
  }, [removeToast])

  const toastMethod = useCallback(
    (type: Toast['type']) => (props: ToastProps) => {
      addToast({ ...props, type })
    }, [addToast]
  )

  const success = toastMethod('success')
  const error = toastMethod('error')
  const info = toastMethod('info')
  const warning = toastMethod('warning')

  return (
    <ToastContext.Provider value={{ toasts, addToast, removeToast, success, error, info, warning }}>
      {children}
    </ToastContext.Provider>
  )
}
