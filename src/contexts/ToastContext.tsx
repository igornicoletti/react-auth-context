import { createContext, ReactNode, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { Toast, ToastContextProvider } from '../types'

const ToastContext = createContext<ToastContextProvider | undefined>(undefined)

const ToastProvider = ({ children }: { children: ReactNode }) => {
  const [toast, setToast] = useState<Toast[]>([])
  const [toastTimers, setToastTimers] = useState<Map<string, ReturnType<typeof setTimeout>>>(new Map()) // Usando ReturnType

  const hideToast = (id: Toast['id']) => {
    setToast((prevToast) =>
      prevToast.map((toast) =>
        toast.id === id ? { ...toast, status: false } : toast))

    if (toastTimers.has(id)) {
      clearTimeout(toastTimers.get(id))
      setToastTimers((prevTimers) => {
        const newTimers = new Map(prevTimers)
        newTimers.delete(id)
        return newTimers
      })
    }
  }

  const addToast = (toast: Omit<Toast, 'id' | 'status'>) => {
    const id = uuidv4()
    const newToast: Toast =
      { ...toast, id, status: true, duration: toast.duration || 4000 }

    setToast((prevToast) => [...prevToast, newToast])
    const timeout = setTimeout(() => hideToast(id), newToast.duration)
    setToastTimers((prevTimers) => new Map(prevTimers).set(id, timeout))
  }

  return (
    <ToastContext.Provider value={{ toast, addToast, hideToast }}>
      {children}
    </ToastContext.Provider>
  )
}

export { ToastContext, ToastProvider }
