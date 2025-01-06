import { Field, ValidationError } from '../types'
import { errorMessages } from './'

/**
 * Validation function for required fields.
 * @param label The label of the field to be validated.
 * @param value The value of the field to be validated.
 * @returns An error message if the field is empty, or `null` if the field is valid.
 */
const isRequired = (label: string, value: string): string | null => {
  return value ? null : errorMessages.required(label)
}

/**
 * Validation function for emails.
 * Checks if the provided email has a valid format.
 * @param email The email to be validated.
 * @returns An error message if the email is invalid, or `null` if the email is valid.
 */
const validateEmail = (email: string): string | null => {
  return /\S+@\S+\.\S+/.test(email) ? null : errorMessages.invalidEmail
}

/**
 * Validation function for passwords.
 * Checks if the password is at least 6 characters long.
 * @param password The password to be validated.
 * @returns An error message if the password is too short, or `null` if the password is valid.
 */
const validatePassword = (password: string): string | null => {
  return password.length >= 6 ? null : errorMessages.shortPassword
}

/**
 * Validates a field based on its name and custom or standard validation strategy.
 * If validation fails, it returns a `ValidationError`; otherwise, it returns `null`.
 * @param field The field object containing metadata like name, label, and custom validation function.
 * @param value The value to be validated.
 * @returns A `ValidationError` if validation fails, or `null` if the field is valid.
 */
const validateField = (field: Field, value: string): ValidationError | null => {
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

  const validationStrategies: { [key: string]: (value: string) => string | null } = {
    email: validateEmail,
    password: validatePassword,
  }

  const validationStrategy = validationStrategies[field.name]
  if (validationStrategy) {
    const validationError = validationStrategy(value)
    if (validationError) {
      return { field: field.name, message: validationError }
    }
  }

  return null
}

/**
 * Validates all fields in a form.
 * Iterates through each field and checks for validation errors.
 * @param fields An array of field objects to be validated.
 * @param formState An object representing the current values of the form fields.
 * @returns An array of `ValidationError` objects for the fields that failed validation.
 */
export const validateForm = (fields: Field[], formState: Record<string, string>): ValidationError[] => {
  const errors: ValidationError[] = []

  fields.forEach(field => {
    const error = validateField(field, formState[field.name])
    if (error) {
      errors.push(error)
    }
  })

  return errors
}
