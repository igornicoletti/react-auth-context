import { tv } from 'tailwind-variants'

const transitions = 'transition duration-200 ease-in-out'

export const formVariants = tv({
  slots: {
    form: 'grid gap-6',
    field: 'grid gap-1',
    fieldInput: 'block w-full h-10 rounded-lg bg-charcoal-gray px-4 text-base placeholder:text-purple-blue focus:outline-none focus:outline-2 focus:-outline-offset-2 focus:outline-lavender-purple',
    fieldPwd: 'relative',
    fieldBtn: 'absolute top-1/2 right-4 -translate-y-1/2',
    fieldIcon: `size-5 text-purple-blue hover:text-lavender-purple ${transitions}`,
    action: 'flex items-center justify-between',
    actionRmb: 'flex items-center gap-2',
    actionCbx: 'group grid size-4 grid-cols-1',
    actionInput: 'appearance-none col-start-1 row-start-1 rounded border-2 border-lavender-purple checked:bg-lavender-purple/50 indeterminate:bg-lavender-purple focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lavender-purple disabled:bg-lavender-purple disabled:checked:bg-lavender-purple forced-colors:appearance-auto',
    actionIcon: 'size-3 pointer-events-none col-start-1 row-start-1 self-center justify-self-center opacity-0 group-has-[:checked]:opacity-100',
    actionFrgt: `font-semibold text-lavender-purple/80 hover:text-lavender-purple `,
    submit: `inline-flex w-full h-10 items-center justify-center rounded-lg bg-lavender-purple/80 px-3 font-semibold hover:bg-lavender-purple ${transitions}`,
  },
})
