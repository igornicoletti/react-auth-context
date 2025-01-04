import { Field, ValidationError } from '../types'

const errorMessages = {
  required: (field: string) => `${field} is required.`,
  invalidEmail: 'Please provide a valid email address.',
  shortPassword: 'Password must be at least 6 characters long.',
}

export const isRequired = (label: string, value: string): string | null => {
  return value ? null : errorMessages.required(label)
}

export const validateEmail = (email: string): string | null => {
  return /\S+@\S+\.\S+/.test(email) ? null : errorMessages.invalidEmail
}

export const validatePassword = (password: string): string | null => {
  return password.length >= 6 ? null : errorMessages.shortPassword
}

export const validateField = (field: Field, value: string): ValidationError | null => {
  if (field.validate) {
    const customError = field.validate(value)
    if (customError) {
      return { field: field.name, message: customError }
    }
  }

  const requiredError = isRequired(field.label, value)
  if (requiredError) {
    return { field: field.name, message: requiredError }
  }

  switch (field.name) {
    case 'email': {
      const emailError = validateEmail(value)
      if (emailError) return { field: field.name, message: emailError }
      break
    }
    case 'password': {
      const passwordError = validatePassword(value)
      if (passwordError) return { field: field.name, message: passwordError }
      break
    }
    default:
      return null
  }

  return null
}

export const validateForm = (fieldsData: Field[], formState: { [key: string]: string }): ValidationError[] => {
  const errors: ValidationError[] = []

  fieldsData.forEach((field) => {
    const error = validateField(field, formState[field.name])
    if (error) errors.push(error)
  })

  return errors
}
