import { ReactNode, useEffect, useState } from 'react'
import { Theme } from '../../types'
import { ThemeContext } from './'

/**
 * Retrieves the initial theme value (from localStorage or system preference).
 * Retorna o valor inicial do tema (do localStorage ou preferência do sistema).
 *
 * @returns The initial theme value, either 'light', 'dark', or 'light' by default.
 */
const getInitialTheme = (): Theme => {
  const savedTheme = localStorage.getItem('theme') as Theme | null
  const systemTheme = window.matchMedia?.('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  return savedTheme || systemTheme || 'light'
}

/**
 * Provides theme context for the application.
 * Fornece o contexto do tema para a aplicação.
 *
 * - `theme`: Current theme ('light' or 'dark').
 * - `toggleTheme`: Function to toggle between light and dark themes.
 */
export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>(getInitialTheme)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme((prevTheme) => prevTheme === 'light' ? 'dark' : 'light')
  }

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')

    const handleChange = (event: MediaQueryListEvent) => {
      setTheme(event.matches ? 'dark' : 'light')
    }

    mediaQuery.addEventListener('change', handleChange)

    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
