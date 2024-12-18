import { tv } from 'tailwind-variants'

const transitions = 'transition duration-200 ease-in'

export const signInVariants = tv({
  slots: {
    container: 'grid place-items-center min-h-screen bg-dark-gray text-light-gray',
    wrapper: 'mx-auto w-full max-w-lg px-6 py-8 grid gap-12 text-sm font-medium',
    title: 'text-center text-2xl font-bold',
    form: 'grid gap-6',
    formGroup: 'grid gap-2',
    groupInput: 'block w-full h-10 rounded-lg bg-charcoal-gray px-3 text-base placeholder:text-purple-blue focus:outline-none focus:outline-2 focus:-outline-offset-2 focus:outline-lavender-purple',
    formButton: `inline-flex w-full h-10 items-center justify-center rounded-lg bg-lavender-purple px-3 font-semibold hover:bg-lavender-purple/85 ${transitions}`,
    formPrivacy: 'text-xs',
    formAction: 'flex items-center justify-between',
    actionForgot: `font-semibold text-lavender-purple hover:text-lavender-purple/85 ${transitions}`,
    actionRemember: 'flex items-center gap-2',
    rememberCheckbox: 'group grid size-4 grid-cols-1',
    checkboxInput: 'appearance-none col-start-1 row-start-1 rounded border border-lavender-purple checked:bg-lavender-purple indeterminate:bg-lavender-purple focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lavender-purple disabled:bg-lavender-purple disabled:checked:bg-lavender-purple forced-colors:appearance-auto',
    checkboxIcon: 'pointer-events-none col-start-1 row-start-1 self-center justify-self-center text-sm opacity-0 group-has-[:checked]:opacity-100',
    separator: 'relative',
    separatorAbsolute: 'absolute inset-0 flex items-center',
    absoluteLine: 'w-full border-t border-steel-gray',
    separatorRelative: 'relative flex justify-center',
    relativeText: 'bg-dark-gray px-6',
    connect: 'grid grid-cols-2 gap-4',
    connectButton: `flex h-10 items-center justify-center gap-2 rounded-lg border border-steel-gray bg-charcoal-gray px-3 font-semibold hover:bg-steel-gray ${transitions}`,
    connectIcon: 'text-xl text-lavender-purple',
    account: 'text-center text-sm',
    accountLink: `font-semibold text-lavender-purple hover:underline hover:underline-offset-2 ${transitions}`,

  },
})
