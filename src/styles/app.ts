import { tv } from 'tailwind-variants'

export const appVariants = tv({
  slots: {
    container: 'relative w-full min-h-screen bg-dracula-light dark:bg-dracula-dark',
    theme: 'absolute top-6 right-6',
    toast: 'pointer-events-none fixed inset-0 flex items-end p-6 sm:items-start',
    toastWrapper: 'flex w-full flex-col items-center space-y-4 sm:items-end',
  },
})
