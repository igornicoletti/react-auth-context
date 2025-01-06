import { createContext } from 'react'
import { ToastContextProps } from '../../types'

/**
 * The context that provides the state and methods related to toasts.
 * Stores the current toasts in the application and provides methods for adding, removing, and displaying different types of toasts.
 */
export const ToastContext = createContext<ToastContextProps | undefined>(undefined)
