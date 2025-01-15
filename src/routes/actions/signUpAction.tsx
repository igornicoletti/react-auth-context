import { ActionFunction } from 'react-router-dom'
import { validateSignUp } from '../../utils'

export const signUpAction: ActionFunction = async ({ request }) => {
  const formData = await request.formData()
  const fullName = formData.get('fullName')?.toString().trim() || ''
  const email = formData.get('email')?.toString().trim() || ''
  const password = formData.get('password')?.toString().trim() || ''

  const formState = { fullName, email, password }
  const errors = validateSignUp(formState)

  if (errors.length > 0) {
    return { error: true, errors }
  }

  return { success: true, fullName, email, password }
}
