import { createContext } from 'react'
import { ThemeContextProps } from '../../types'

/**
 * The context that provides the state related to the theme and the function to toggle it.
 * Stores the current theme and provides the function to toggle between themes.
 */
export const ThemeContext = createContext<ThemeContextProps | undefined>(undefined)
