import { ValidationError, ValidationField } from '../types'
import { validateForm } from './validations'

export const signInFieldsData: ValidationField[] = [
  { id: 'email', name: 'email', label: 'Email', type: 'email' },
  { id: 'password', name: 'password', label: 'Password', type: 'password' },
]

export const validateSignIn = (formState: Record<string, string>): ValidationError[] =>
  validateForm(signInFieldsData, formState)
