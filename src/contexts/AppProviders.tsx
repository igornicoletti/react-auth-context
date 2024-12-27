import { ReactNode } from 'react'
import { ThemeProvider } from './ThemeContext'
import { ToastProvider } from './ToastContext'

export const AppProviders = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeProvider>
      <ToastProvider>
        {children}
      </ToastProvider>
    </ThemeProvider>
  )
}
