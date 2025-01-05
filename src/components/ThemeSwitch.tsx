import { Switch } from '@headlessui/react'
import { MoonStars, Sun } from '@phosphor-icons/react'
import { switchVariants } from '../styles'
import { useTheme } from '../hooks'
import { useMemo } from 'react'

/**
 * Switch component for toggling between light and dark theme.
 * Componente de switch para alternar entre os temas claro e escuro.
 *
 * - `theme`: The current theme ('light' or 'dark').
 * - `toggleTheme`: Function to toggle between themes.
 */
export const ThemeSwitch = () => {
  const { theme, toggleTheme } = useTheme()
  const enabled = theme === 'dark'

  // Memorizes the variants object to avoid recalculating on every render
  // Memoriza o objeto de variantes para evitar recálculo a cada renderização
  const variants = useMemo(() => switchVariants(), [])

  return (
    <Switch
      checked={enabled}
      onChange={toggleTheme}
      className={variants.switcher()}
      aria-label="Toggle theme between light and dark mode">
      <span className={variants.label()}>Theme mode</span>
      <span className={variants.thumb()}>
        <span className={variants.thumbSun()} aria-hidden={true}>
          <Sun className={variants.thumbIcon()} aria-hidden={true} weight='duotone' />
        </span>
        <span className={variants.thumbMoon()} aria-hidden={true}>
          <MoonStars className={variants.thumbIcon()} aria-hidden={true} weight='duotone' />
        </span>
      </span>
    </Switch>
  )
}
