import { useContext } from 'react'
import { Toast } from '../types'
import { ToastContext } from '../contexts'

export const useToast = () => {
  const context = useContext(ToastContext)

  if (!context) {
    throw new Error('useToast must be used within a ToastProvider')
  }

  const { toast, addToast, removeToast } = context

  const toastMethod = (type: Toast['type']) =>
    (props: Omit<Toast, 'id' | 'status' | 'type'>) =>
      addToast({ ...props, type })

  return {
    toast,
    removeToast,
    success: toastMethod('success'),
    error: toastMethod('error'),
    info: toastMethod('info'),
    warning: toastMethod('warning'),
  }
}
