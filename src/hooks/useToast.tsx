import { useContext } from 'react'
import { ToastContext } from '../contexts'
import { ToastContextProps } from '../types'

/**
 * Custom hook to access the Toast context and its methods.
 * - Throws an error if used outside of a `ToastProvider`.
 * @returns {ToastContextProps} The current toast context containing methods for adding, removing, and managing toasts.
 * @throws Will throw an error if the hook is used outside of a `ToastProvider`.
 */
export const useToast = (): ToastContextProps => {
  const context = useContext(ToastContext)

  if (!context) {
    throw new Error('useToast must be used within a ToastProvider')
  }

  return context
}
