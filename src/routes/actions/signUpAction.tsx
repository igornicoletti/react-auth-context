import { ActionFunction } from 'react-router-dom'

export const signUpAction: ActionFunction = async ({ request }) => {
  const formData = await request.formData()
  const fullName = formData.get('fullName') as string
  const email = formData.get('email') as string
  const password = formData.get('password') as string

  if (!fullName || !email || !password) {
    return { error: 'All fields are required!' }
  }

  return { fullName, email, password }
}
