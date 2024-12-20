import { Switch } from '@headlessui/react'
import { Moon, Sun } from '@phosphor-icons/react'
import { useTheme } from '../hooks'
import { switchVariants } from '../styles'

const { label, switcher, thumb, thumbIcon, thumbMoon, thumbSun } = switchVariants()

export const ThemeSwitch = () => {
  const { theme, toggleTheme } = useTheme()
  const enabled = theme === 'dark'

  return (
    <Switch
      checked={enabled}
      onChange={toggleTheme}
      className={switcher()}>
      <span className={label()}>Theme mode</span>
      <span className={thumb()}>
        <span className={thumbSun()} aria-hidden={true}>
          <Sun className={thumbIcon()} weight='duotone' />
        </span>
        <span className={thumbMoon()} aria-hidden={true}>
          <Moon className={thumbIcon()} weight='duotone' />
        </span>
      </span>
    </Switch>
  )
}