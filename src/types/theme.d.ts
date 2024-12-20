export type Theme = 'light' | 'dark'

export interface ThemeContextProps {
  theme: Theme
  toggleTheme: () => void
}
