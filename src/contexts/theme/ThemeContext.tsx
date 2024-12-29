import { createContext } from 'react'
import { ThemeContextProps } from '../../types'

export const ThemeContext = createContext<ThemeContextProps | undefined>(undefined)
