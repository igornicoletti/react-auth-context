import { ReactNode } from 'react'
import { ToastProvider } from './toast'
import { ThemeProvider } from './theme'

export const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeProvider>
      <ToastProvider>
        {children}
      </ToastProvider>
    </ThemeProvider>
  )
}
