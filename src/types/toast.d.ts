type ToastType = 'success' | 'error' | 'info' | 'alert'

export interface Toast {
  id: string
  message: string
  type: ToastType
  duration: number
  onClose?: () => void
}

export interface ToastContextProvider {
  toasts: Toast[]
  addToast: (toast: Toast) => void
  removeToast: (id: string) => void
}
