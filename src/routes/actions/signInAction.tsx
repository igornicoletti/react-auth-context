import { ActionFunction } from 'react-router-dom'
import { validateSignIn } from '../../utils'

export const signInAction: ActionFunction = async ({ request }) => {
  const formData = await request.formData()
  const email = formData.get('email')?.toString().trim() || ''
  const password = formData.get('password')?.toString().trim() || ''

  const formState = { email, password }
  const errors = validateSignIn(formState)

  if (errors.length > 0) {
    return { error: true, errors }
  }

  return { success: true, email, password }
}
