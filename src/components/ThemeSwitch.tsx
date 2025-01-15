import { Switch } from '@headlessui/react'
import { MoonStars, Sun } from '@phosphor-icons/react'
import { useTheme } from '../hooks'
import { switchVariants } from '../styles'

/**
 * A toggle switch component for switching between light and dark themes.
 * - Utilizes the `useTheme` hook to access the current theme and toggle function.
 * - Uses Tailwind Variants for consistent styling and theming.
 * @returns A styled switch component that toggles the theme when interacted with.
 * @component
 */
export const ThemeSwitch = () => {
  const themeSwitchStyles = switchVariants()
  const { theme, toggleTheme } = useTheme()

  return (
    <Switch
      onChange={toggleTheme}
      checked={theme === 'dark'}
      className={themeSwitchStyles.switch()}
      aria-label="Toggle theme between light and dark mode">
      <span className={themeSwitchStyles.label()}>Theme mode</span>
      <span className={themeSwitchStyles.thumb()}>
        <span className={themeSwitchStyles.iconSun()} aria-hidden={true}>
          <Sun className={themeSwitchStyles.icon()} aria-hidden={true} weight='duotone' />
        </span>
        <span className={themeSwitchStyles.iconMoon()} aria-hidden={true}>
          <MoonStars className={themeSwitchStyles.icon()} aria-hidden={true} weight='duotone' />
        </span>
      </span>
    </Switch>
  )
}
