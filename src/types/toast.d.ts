/**
 * Represents the type of toast notification.
 * Can be one of the following: 'success', 'error', 'info', or 'warning'.
 */
export type ToastType = 'success' | 'error' | 'info' | 'warning'

/**
 * Defines the structure of a toast notification.
 * @property id - Unique identifier for the toast.
 * @property title - Title of the toast notification.
 * @property message - (Optional) Detailed message for the toast.
 * @property duration - (Optional) Duration in milliseconds for how long the toast is displayed.
 * @property type - Type of the toast, based on ToastType.
 * @property status - Indicates whether the toast is active or dismissed.
 */
export interface Toast {
  id: string
  title: string
  message?: string
  duration?: number
  type: ToastType
  status: boolean
}

/**
 * Represents the properties required to create a toast, excluding certain internal fields.
 * @see Toast
 * Omits the 'id', 'status', and 'type' properties from the Toast interface.
 */
export type ToastProps = Omit<Toast, 'id' | 'status' | 'type'>

/**
 * Defines the context properties for managing toast notifications.
 * @property toast - List of active toast notifications.
 * @property addToast - Function to add a new toast. Requires all Toast properties except 'id' and 'status'.
 * @property removeToast - Function to remove a toast by its unique identifier.
 * @property success - Function to add a success-type toast. Requires ToastProps.
 * @property error - Function to add an error-type toast. Requires ToastProps.
 * @property info - Function to add an info-type toast. Requires ToastProps.
 * @property warning - Function to add a warning-type toast. Requires ToastProps.
 */
export interface ToastContextProps {
  toast: Toast[]
  addToast: (toast: Omit<Toast, 'id' | 'status'>) => void
  removeToast: (id: Toast['id']) => void
  success: (toast: ToastProps) => void
  error: (toast: ToastProps) => void
  info: (toast: ToastProps) => void
  warning: (toast: ToastProps) => void
}
