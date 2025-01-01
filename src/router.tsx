import { createBrowserRouter, Navigate } from 'react-router-dom'
import { App } from './App'
import { SignIn, SignUp } from './pages'
import { signInAction, signUpAction } from './routes/actions'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Navigate to='/sign-in' replace />
      },
      {
        path: 'sign-in',
        element: <SignIn />,
        action: signInAction
      },
      {
        path: 'sign-up',
        element: <SignUp />,
        action: signUpAction
      }
    ]
  },
])
