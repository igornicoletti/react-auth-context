import { Outlet } from 'react-router-dom'
import { ThemeSwitch, ToastNotification } from './components'
import { appVariants } from './styles'

const { container, theme, toast, toastWrapper } = appVariants()

export const App = () => {
  return (
    <div className={container()}>
      <div className={theme()}>
        <ThemeSwitch />
      </div>
      <Outlet />
      <div className={toast()} aria-live='assertive'>
        <div className={toastWrapper()}>
          <ToastNotification />
        </div>
      </div>
    </div>
  )
}
