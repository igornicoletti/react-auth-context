/**
 * Represents the basic structure of a field in a form.
 * Representa a estrutura básica de um campo em um formulário.
 *
 * - `id`: Unique identifier for the field.
 * - `name`: The name of the field.
 * - `label`: The label of the field, used for display in the UI and error messages.
 * - `type`: The input type, such as "text", "email", "password".
 * - `value`: The current value of the field (optional).
 * - `errorMessage`: The error message associated with the field (optional).
 */
export interface FieldBase {
  id: string
  name: string
  label: string
  type: string
  value?: string
  errorMessage?: string
}

/**
 * Extends FieldBase with additional properties for managing field-specific behavior.
 * Estende FieldBase com propriedades adicionais para gerenciar comportamentos específicos do campo.
 *
 * - `isPwd`: Indicates if the field is a password field (optional).
 * - `onChange`: The event handler for handling changes in the input field (optional).
 * - `validate`: A custom validation function that returns an error message or null (optional).
 */
export interface Field extends FieldBase {
  isPwd?: boolean
  onChange?: ChangeEventHandler<HTMLInputElement>
  validate?: (value: string) => string | null
}
