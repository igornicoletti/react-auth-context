/**
 * Represents the available themes for the application.
 * Can be either 'light' or 'dark'.
 */
export type Theme = 'light' | 'dark'

/**
 * Defines the structure of the theme context properties.
 * Provides the current theme and a function to toggle between themes.
 * @property theme - The current theme of the application ('light' or 'dark').
 * @property toggleTheme - A function to switch between the 'light' and 'dark' themes.
 */
export interface ThemeContextProps {
  theme: Theme
  toggleTheme: () => void
}
