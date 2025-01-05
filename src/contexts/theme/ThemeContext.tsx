import { createContext } from 'react'
import { ThemeContextProps } from '../../types'

/**
 * Context to provide theme-related values to the application.
 * Contexto para fornecer valores relacionados ao tema para a aplicação.
 *
 * - `theme`: Current theme ('light' or 'dark').
 * - `toggleTheme`: Function to toggle between themes.
 */
export const ThemeContext = createContext<ThemeContextProps | undefined>(undefined)
