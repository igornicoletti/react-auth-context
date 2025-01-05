/**
 * Represents the context value for theme-related data.
 * Representa o valor do contexto para dados relacionados ao tema.
 *
 * - `theme`: Current theme ('light' or 'dark').
 * - `toggleTheme`: Function to toggle between themes.
 */
export interface ThemeContextProps {
  theme: 'light' | 'dark'
  toggleTheme: () => void
}

/**
 * Defines possible theme values.
 * Define os valores possíveis para o tema.
 *
 * - `light`: Light theme.
 * - `dark`: Dark theme.
 */
export type Theme = 'light' | 'dark'
