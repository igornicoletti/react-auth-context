import { Outlet } from 'react-router-dom'
import { ThemeSwitch, ToastNotification } from './components'

export const App = () => {
  return (
    <div className={'relative w-full min-h-screen bg-dracula-light dark:bg-dracula-dark'}>
      <div className='absolute top-6 right-6'>
        <ThemeSwitch />
      </div>
      <Outlet />
      <div aria-live="assertive" className="pointer-events-none fixed inset-0 flex items-end p-6 sm:items-start">
        <div className="flex w-full flex-col items-center space-y-4 sm:items-end">
          <ToastNotification />
        </div>
      </div>
    </div>
  )
}
