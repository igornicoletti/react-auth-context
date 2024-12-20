import { ActionFunction } from 'react-router-dom'

export const signInAction: ActionFunction = async ({ request }) => {
  const formData = await request.formData()
  const email = formData.get('email') as string
  const password = formData.get('password') as string

  const errors: Record<string, string> = {}

  if (!email) {
    errors.email = 'Email is required!'
  }

  if (!password) {
    errors.password = 'Password is required!'
  }

  if (Object.keys(errors).length > 0) {
    return { errors }
  }

  return { errors }
}
