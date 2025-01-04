import { Field } from '../types'

export const validateEmail = (email: string): string | null => {
  if (!/\S+@\S+\.\S+/.test(email)) return 'Please provide a valid email address.'
  return null
}

export const validatePassword = (password: string): string | null => {
  if (password.length < 6) return 'Password must be at least 6 characters long.'
  return null
}

export const validateField = (field: Field, value: string): string | null => {
  if (!value) return `${field.label} is required.`

  switch (field.name) {
    case 'email':
      return validateEmail(value)
    case 'password':
      return validatePassword(value)
    default:
      return null
  }
}

export const validateForm = (fieldsData: Field[], formState: { [key: string]: string }): { [key: string]: string } => {
  const errors: { [key: string]: string } = {}

  fieldsData.forEach((field) => {
    const error = validateField(field, formState[field.name])
    if (error) {
      errors[field.name] = error
    }
  })

  return errors
}
