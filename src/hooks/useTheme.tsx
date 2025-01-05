import { useContext } from 'react'
import { ThemeContextProps } from '../types'
import { ThemeContext } from '../contexts'

/**
 * Custom hook to access the current theme and toggle function.
 * Hook personalizado para acessar o tema atual e a função de alternância.
 *
 * - Throws an error if used outside of a `ThemeProvider`.
 * - Retorna o contexto do tema, com o valor atual do tema e a função de alternância.
 *
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
