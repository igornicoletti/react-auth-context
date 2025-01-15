import { ValidationError, ValidationField, ValidationStrategy } from '../types'

const errorMessages = {
  required: (field: string) => `${field} field is required.`,
  invalidEmail: 'Please provide a valid email address.',
  shortPassword: 'Password must be at least 6 characters long.',
  invalidNumber: 'Please provide a valid number.'
}

const validationStrategies: Record<string, ValidationStrategy> = {
  email: (value) => (/^\S+@\S+\.\S+$/.test(value) ? null : errorMessages.invalidEmail),
  password: (value) => (value.length >= 6 ? null : errorMessages.shortPassword),
  number: (value) => (/^\d+$/.test(value) ? null : errorMessages.invalidNumber),
  text: (value) => (value.trim() !== '' ? null : errorMessages.required('Text'))
}

const validateField = (field: ValidationField, value: string): ValidationError | null => {
  if (!value) return { field: field.name, message: errorMessages.required(field.label) }

  const customError = field.validate?.(value)
  if (customError) return { field: field.name, message: customError }

  const strategyError = validationStrategies[field.type]?.(value)
  if (strategyError) return { field: field.name, message: strategyError }

  return null
}

export const validateForm = (fields: ValidationField[], formState: Record<string, string>): ValidationError[] =>
  fields
    .map((field) => validateField(field, formState[field.name] || ''))
    .filter((error): error is ValidationError => error !== null)
