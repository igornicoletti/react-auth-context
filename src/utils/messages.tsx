/**
 * Object containing error messages used for form validation.
 * Each property corresponds to a specific validation rule and provides the corresponding error message.
 */
export const errorMessages = {
  required: (field: string) => `${field} is required.`,
  invalidEmail: 'Please provide a valid email address.',
  shortPassword: 'Password must be at least 6 characters long.',
}
