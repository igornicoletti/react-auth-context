/**
 * Represents the structure of a field in a form validation context.
 * Contém informações sobre campos usados na validação de formulários.
 *
 * - `label`: Field label for display in error messages.
 * - `name`: Unique identifier for the field.
 * - `type`: Type of input, such as "text", "email", or "password".
 * - `validate?`: Optional custom validation function returning an error message or null.
 */
export interface ValidationField {
  label: string
  name: string
  type: string
  validate?: (value: string) => string | null
}

/**
 * Describes an error produced during form validation.
 * Descreve um erro gerado durante a validação do formulário.
 *
 * - `field`: Name of the field with the error.
 * - `message`: Description of the error.
 */
export type ValidationError = {
  field: string
  message: string
}
