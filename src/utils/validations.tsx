export const validateEmail = (email: string): string | null => {
  if (!email)
    return 'Email is required!'

  if (!/\S+@\S+\.\S+/.test(email))
    return 'Please provide a valid email address.'

  return null
}

export const validatePassword = (password: string): string | null => {
  if (!password)
    return 'Password is required.'

  if (password.length < 6)
    return 'Password must be at least 6 characters long.'

  return null
}

export const validateForm = (email: string, password: string): { [key: string]: string } => {
  const errors: { [key: string]: string } = {}

  const emailError = validateEmail(email)
  if (emailError) errors.email = emailError

  const passwordError = validatePassword(password)
  if (passwordError) errors.password = passwordError

  return errors
}
