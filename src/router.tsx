import { createBrowserRouter } from 'react-router-dom'
import { SignIn } from './pages'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <SignIn />
  }
])
