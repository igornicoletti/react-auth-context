import { tv } from 'tailwind-variants'

const transitions = 'transition duration-300 ease-in-out'
const focusvisible = 'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-dracula-purple'

export const formVariants = tv({
  slots: {
    form: 'grid gap-6 py-6',
    field: 'relative grid gap-1',
    fieldInput: `relative block w-full h-10 px-4 rounded-lg border
    border-dracula-purple/50 dark:border-dracula-charcoal
    bg-dracula-purple/5 dark:bg-dracula-charcoal placeholder:text-dracula-blue
    focus:outline-none focus:outline-2 focus:-outline-offset-2 focus:outline-dracula-purple ${transitions}`,
    fieldPassword: `group absolute top-6 right-0 py-2.5 px-4 ${focusvisible}`,
    fieldIcon: `size-5 text-dracula-purple/90 group-hover:text-dracula-purple ${transitions}`,
    fieldError: 'text-right text-xs text-dracula-red',
    action: 'flex items-center justify-between',
    actionRemember: 'flex items-center gap-2',
    actionCheckbox: 'group grid grid-cols-1 size-4 text-dracula-light',
    actionInput: `appearance-none col-start-1 row-start-1 border
      border-dracula-purple rounded checked:bg-dracula-purple/90 forced-colors:appearance-auto ${focusvisible} ${transitions}`,
    actionIcon: `size-3 pointer-events-none col-start-1 row-start-1 self-center justify-self-center opacity-0 group-has-[:checked]:opacity-100 ${transitions}`,
    actionForgot: `font-semibold text-dracula-purple ${focusvisible}`,
    terms: 'text-xs',
    termsLink: `font-semibold text-dracula-purple ${focusvisible}`,
    submit: `inline-flex w-full h-10 items-center justify-center px-4 uppercase rounded-lg font-semibold
    text-dracula-light bg-gradient-to-tr from-dracula-purple to-dracula-purple hover:to-dracula-purple/90
    disabled:from-dracula-purple disabled:to-dracula-purple/90 disabled:cursor-not-allowed ${focusvisible} ${transitions}`,
  },
  variants: {
    color: {
      error: {
        fieldInput: 'border-dracula-red dark:border-dracula-red'
      },
    }
  }
})
