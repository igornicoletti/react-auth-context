import { tv } from 'tailwind-variants'

const transitions = 'transition duration-200 ease-in-out'

export const formVariants = tv({
  slots: {
    form: 'grid gap-6 py-6',
    field: 'grid gap-1 font-medium',
    fieldInput: `block w-full h-10 px-4 md:text-base rounded-lg focus:outline-none focus:outline-2 focus:-outline-offset-2 bg-dracula-charcoal placeholder:text-dracula-blue focus:outline-dracula-purple`,
    fieldPassword: 'relative',
    fieldButton: 'absolute top-1/2 right-4 -translate-y-1/2',
    fieldIcon: `size-5 text-dracula-blue hover:text-dracula-purple ${transitions}`,
    action: 'flex items-center justify-between',
    actionRemember: 'flex items-center gap-2',
    actionCheckbox: 'group grid grid-cols-1 size-4',
    actionInput: `appearance-none col-start-1 row-start-1 border border-dracula-purple rounded checked:bg-dracula-purple/25 indeterminate:bg-dracula-purple focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-dracula-purple disabled:bg-dracula-purple disabled:checked:bg-dracula-purple forced-colors:appearance-auto`,
    actionIcon: `size-3 pointer-events-none col-start-1 row-start-1 self-center justify-self-center opacity-0 group-has-[:checked]:opacity-100`,
    actionForgot: `font-semibold text-dracula-purple/90 hover:text-dracula-purple ${transitions}`,
    terms: 'text-xs',
    termsLink: 'font-medium text-dracula-purple',
    submit: `inline-flex w-full h-10 items-center justify-center px-4 uppercase rounded-lg font-semibold bg-dracula-purple/90 hover:bg-dracula-purple ${transitions}`,
  },
})
