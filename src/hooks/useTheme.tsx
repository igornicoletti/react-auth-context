import { useContext } from 'react'
import { ThemeContextProps } from '../types'
import { ThemeContext } from '../contexts'

/**
 * Custom hook to access the current theme and toggle function.
 * - Throws an error if used outside of a `ThemeProvider`.
 * @returns {ThemeContextProps} The current theme context containing the `theme` and `toggleTheme` function.
 * @throws Will throw an error if the hook is used outside of a `ThemeProvider`.
 */
export const useTheme = (): ThemeContextProps => {
  const context = useContext(ThemeContext)

  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }

  return context
}
