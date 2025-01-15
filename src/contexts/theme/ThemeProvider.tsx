import { ReactNode, useEffect, useState } from 'react'
import { Theme } from '../../types'
import { ThemeContext } from './'

/**
 * Retrieve saved theme from localStorage.
 * Check system's preferred color scheme.
 * @returns Return the saved theme, system theme, or default to 'light'.
 */
const getInitialTheme = (): Theme => {
  const savedTheme = localStorage.getItem('theme') as Theme | null
  const systemTheme = window.matchMedia?.('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'

  return savedTheme || systemTheme || 'dark'
}

/**
 * State to manage the current theme, initialized with the result of getInitialTheme.
 * Synchronizes the theme state with the document's attribute and localStorage.
 * @param children - The child components that require access to the theme context.
 * @returns The ThemeContext.Provider with the current theme and toggleTheme function.
 */
export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>(getInitialTheme)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'))
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
