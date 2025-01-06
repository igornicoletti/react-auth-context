/**
 * Represents the structure of a validation field in a form.
 * Defines the properties required for validation logic.
 * @property label - The display label for the field (e.g., "Email").
 * @property name - The name of the field, used as a key in form submissions.
 * @property type - The input type of the field, such as "text", "password", or "email".
 * @property validate - (Optional) A function to validate the field's value.
 *                      Returns an error message as a string if validation fails, or `null` if valid.
 */
export interface ValidationField {
  label: string
  name: string
  type: string
  validate?: (value: string) => string | null
}

/**
 * Represents a validation error associated with a specific field.
 * Defines the structure for error handling in forms.
 * @property field - The name of the field where the error occurred.
 * @property message - A detailed error message describing the issue.
 */
export type ValidationError = {
  field: string
  message: string
}
