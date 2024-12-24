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
        element: <Navigate to='/signin' replace />
      },
      {
        path: 'signin',
        element: <SignIn />,
        action: signInAction
      },
      {
        path: 'signup',
        element: <SignUp />,
        action: signUpAction
      }
    ]
  },
])
