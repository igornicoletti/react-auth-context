/**
 * Represents the base structure of a form field.
 * Contains common properties used across different types of fields.
 * @property id - A unique identifier for the field.
 * @property name - The name attribute for the field, used in form submissions.
 * @property label - The display label for the field.
 * @property type - The input type of the field (e.g., "text", "email", "password").
 * @property value - (Optional) The current value of the field.
 * @property errorMessage - (Optional) The error message displayed if validation fails.
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
 * Extends the base field structure with additional properties for specific functionality.
 * Adds features for password fields, change handling, and validation.
 * @property isPwd - (Optional) Indicates if the field is a password field.
 * @property onChange - (Optional) Function to handle changes to the field's value.
 * @property validate - (Optional) Function to validate the field's value.
 *                      Returns an error message as a string if validation fails, or `null` if valid.
 */
export interface Field extends FieldBase {
  isPwd?: boolean
  onChange?: ChangeEventHandler<HTMLInputElement>
  validate?: (value: string) => string | null
}
