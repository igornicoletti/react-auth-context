export type ToastType = 'success' | 'error' | 'info' | 'warning'
type AddToast = (toast: Omit<Toast, 'id' | 'status'>) => void
type RemoveToast = (id: Toast['id']) => void

export interface Toast {
  id: string
  title: string
  message?: string
  duration?: number
  type: ToastType
  status: boolean
}

export interface ToastContextProps {
  toast: Toast[]
  removeToast: RemoveToast
  addToast: AddToast
}
