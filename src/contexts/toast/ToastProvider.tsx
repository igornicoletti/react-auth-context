import { ReactNode, useCallback, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { Toast } from '../../types'
import { ToastContext } from './'

const DEFAULT_DURATION = 5000

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

  return (
    <ToastContext.Provider value={{ addToast, removeToast, toast }}>
      {children}
    </ToastContext.Provider>
  )
}
