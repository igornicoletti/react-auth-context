import { ActionFunction } from 'react-router-dom'

export const signInAction: ActionFunction = async ({ request }) => {
  const formData = await request.formData()
  const email = formData.get('email')?.toString().trim() || ''
  const password = formData.get('password')?.toString().trim() || ''

  const errors: { [key: string]: string } = {}

  if (!email) {
    errors.email = 'Email is required!'
  } else if (!/\S+@\S+\.\S+/.test(email)) {
    errors.email = 'Please provide a valid email address.'
  }

  if (!password) {
    errors.password = 'Password is required.'
  } else if (password.length < 6) {
    errors.password = 'Password must be at least 6 characters long.'
  }

  if (Object.keys(errors).length > 0) {
    return { error: true, errors }
  }

  return { success: true, email, password }
}
