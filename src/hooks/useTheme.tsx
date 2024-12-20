import { useContext } from 'react'
import { ThemeContext } from '../contexts'
import { ThemeContextProps } from '../types'

export const useTheme = (): ThemeContextProps => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}
