/**
 * Centralized error messages for form validation.
 * Mensagens de erro centralizadas para validação de formulário.
 */
export const errorMessages = {
  required: (field: string) => `${field} is required.`,
  invalidEmail: 'Please provide a valid email address.',
  shortPassword: 'Password must be at least 6 characters long.',
}
