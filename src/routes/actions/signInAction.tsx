import { ActionFunction } from 'react-router-dom'

export const signInAction: ActionFunction = async ({ request }) => {
  const formData = await request.formData()
  const email = formData.get('email')?.toString() || ''
  const password = formData.get('password')?.toString() || ''

  if (!email || !password) {
    return { error: 'All fields are required!' }
  }

  return { email, password }
}
