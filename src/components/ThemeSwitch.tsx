import { Switch } from '@headlessui/react'
import { MoonStars, Sun } from '@phosphor-icons/react'
import { switchVariants } from '../styles'
import { useTheme } from '../hooks'

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
          <Sun className={thumbIcon()} aria-hidden={true} weight='duotone' />
        </span>
        <span className={thumbMoon()} aria-hidden={true}>
          <MoonStars className={thumbIcon()} aria-hidden={true} weight='duotone' />
        </span>
      </span>
    </Switch>
  )
}
