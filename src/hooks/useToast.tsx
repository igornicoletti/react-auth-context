import { useContext } from 'react'
import { ToastContext } from '../contexts'
import { ToastContextProvider } from '../types'

export const useToast = ((): ToastContextProvider => {
  const context = useContext(ToastContext)
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider')
  }
  return context
})
