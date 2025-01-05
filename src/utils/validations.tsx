import { Field, ValidationError } from '../types'
import { errorMessages } from './'

/**
 * Validates if a field is required.
 * Valida se um campo é obrigatório.
 *
 * @param label - The field's label to display in the error message.
 * @param value - The value to validate.
 * @returns The error message if the field is empty, or null if valid.
 */
const isRequired = (label: string, value: string): string | null => {
  return value ? null : errorMessages.required(label)
}

/**
 * Validates the format of an email address.
 * Valida o formato de um endereço de e-mail.
 *
 * @param email - The email address to validate.
 * @returns The error message if the email is invalid, or null if valid.
 */
const validateEmail = (email: string): string | null => {
  return /\S+@\S+\.\S+/.test(email) ? null : errorMessages.invalidEmail
}

/**
 * Validates the length of a password.
 * Valida o comprimento de uma senha.
 *
 * @param password - The password to validate.
 * @returns The error message if the password is too short, or null if valid.
 */
const validatePassword = (password: string): string | null => {
  return password.length >= 6 ? null : errorMessages.shortPassword
}

/**
 * Validates a single form field using predefined or custom validation logic.
 * Valida um único campo de formulário usando lógica de validação predefinida ou personalizada.
 *
 * @param field - The field definition, including name, label, and validation logic.
 * @param value - The value to validate.
 * @returns An object containing the field name and error message, or null if valid.
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
 * Validates all fields in a form and collects any errors.
 * Valida todos os campos de um formulário e coleta os erros.
 *
 * @param fields - The list of fields to validate.
 * @param formState - The current form values, keyed by field name.
 * @returns A list of validation errors, or an empty list if all fields are valid.
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
