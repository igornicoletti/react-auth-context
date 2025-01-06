import { ReactNode, useEffect, useState } from 'react'
import { Theme } from '../../types'
import { ThemeContext } from './'

/**
 * Retrieves the initial theme, prioritizing the saved theme in localStorage, then the system preference,
 * and defaults to 'light' if none are available.
 * @returns {Theme} The initial theme ('light' or 'dark').
 */
const getInitialTheme = (): Theme => {
  const savedTheme = localStorage.getItem('theme') as Theme | null
  const systemTheme = window.matchMedia?.('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  return savedTheme || systemTheme || 'light'
}

/**
 * Provides the theme context to the component tree.
 * The `ThemeProvider` manages the current theme state and allows it to be toggled.
 * It saves the theme in `localStorage` and listens for system theme changes.
 * @param {ReactNode} children The child components that will consume the theme context.
 * @returns {JSX.Element} The `ThemeContext.Provider` with the current theme and `toggleTheme` function.
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
