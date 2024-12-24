import { createContext, ReactNode, useState } from 'react'
import { Toast, ToastContextProvider } from '../types'

const ToastContext = createContext<ToastContextProvider | undefined>(undefined)

const ToastProvider = (({ children }: { children: ReactNode }) => {
  const [toasts, setToasts] = useState<Toast[]>([])

  const addToast = ((toast: Toast) => {
    setToasts((prev) => [...prev, toast])
  })

  const removeToast = ((id: string) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id))
  })

  return (
    <ToastContext.Provider value={{ toasts, addToast, removeToast }}>
      {children}
    </ToastContext.Provider>
  )
})

export { ToastContext, ToastProvider }
