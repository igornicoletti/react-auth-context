import { createContext, ReactNode, useCallback, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { Toast, ToastContextProvider } from '../types'

const ToastContext = createContext<ToastContextProvider | undefined>(undefined)

const ToastProvider = ({ children }: { children: ReactNode }) => {
  const [toast, setToast] = useState<Toast[]>([])
  const [toastTimers, setToastTimers] = useState<Map<string, ReturnType<typeof setTimeout>>>(new Map())

  const removeToast = useCallback((id: Toast['id']) => {
    setToast((prevToast) =>
      prevToast.map((toast) => toast.id === id
        ? { ...toast, status: false }
        : toast))

    if (toastTimers.has(id)) {
      clearTimeout(toastTimers.get(id))

      setToastTimers((prevTimers) => {
        const newTimers = new Map(prevTimers)
        newTimers.delete(id)
        return newTimers
      })
    }
  }, [toastTimers])

  const addToast = useCallback((toast: Omit<Toast, 'id' | 'status'>) => {
    const id = uuidv4()
    const newToast: Toast = { ...toast, id, status: true, duration: toast.duration || 4000 }
    const timeout = setTimeout(() => removeToast(id), newToast.duration)

    setToast((prevToast) => [...prevToast, newToast])
    setToastTimers((prevTimers) => new Map(prevTimers).set(id, timeout))
  }, [removeToast])

  return (
    <ToastContext.Provider value={{ addToast, removeToast, toast }}>
      {children}
    </ToastContext.Provider>
  )
}

export { ToastContext, ToastProvider }
