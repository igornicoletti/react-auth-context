import { createBrowserRouter } from 'react-router-dom'
import { SignIn, SignUp } from './pages'
import { signInAction, signUpAction } from './routes/actions'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <SignIn />,
    action: signInAction
  },
  {
    path: '/signup',
    element: <SignUp />,
    action: signUpAction
  }
])
