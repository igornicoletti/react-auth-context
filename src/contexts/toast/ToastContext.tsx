import { createContext } from 'react'
import { ToastContextProps } from '../../types'

export const ToastContext = createContext<ToastContextProps | undefined>(undefined)
