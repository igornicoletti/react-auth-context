import { ValidationError, ValidationField } from '../types'
import { validateForm } from './validations'

export const signUpFieldsData: ValidationField[] = [
  { id: 'fullName', name: 'fullName', label: 'Full name', type: 'text' },
  { id: 'email', name: 'email', label: 'Email', type: 'email' },
  { id: 'password', name: 'password', label: 'Password', type: 'password' },
]

export const validateSignUp = (formState: Record<string, string>): ValidationError[] =>
  validateForm(signUpFieldsData, formState)
