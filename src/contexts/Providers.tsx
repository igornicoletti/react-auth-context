import { ReactNode } from 'react'
import { ThemeProvider } from './theme'
import { ToastProvider } from './toast'

export const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeProvider>
      <ToastProvider>
        {children}
      </ToastProvider>
    </ThemeProvider>
  )
}
