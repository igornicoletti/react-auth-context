export type ToastType = 'success' | 'error' | 'info' | 'warning'

export interface Toast {
  id: string
  title: string
  message?: string
  duration?: number
  type: ToastType
  status: boolean
}

export interface ToastContextProvider {
  toast: Toast[]
  hideToast: (id: Toast['id']) => void
  addToast: (toast: Omit<Toast, 'id' | 'status'>) => void
}
