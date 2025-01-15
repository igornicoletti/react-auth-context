import { tv } from 'tailwind-variants'

const animations = `
  transition-all
  data-[closed]:data-[enter]:translate-y-16
  data-[enter]:transform
  data-[closed]:opacity-0
  data-[enter]:duration-300
  data-[leave]:duration-200
  data-[enter]:ease-out
  data-[leave]:ease-in
  data-[closed]:data-[enter]:sm:translate-x-72
  data-[closed]:data-[enter]:sm:translate-y-0
`

export const toastVariants = tv({
  slots: {
    container: `relative pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg bg-dracula-charcoal shadow-lg ring-1 ring-dracula-charcoal ${animations}`,
    message: 'flex items-start gap-3 p-4 pr-10',
    messageIcon: 'shrink-0 size-5 text-dracula-green',
    messageWrap: 'grid gap-1',
    messageTitle: 'font-semibold sm:text-sm text-dracula-light',
    messageDesc: 'text-sm text-dracula-light',
    action: 'group absolute top-0 right-0 p-2.5 focus:outline-none',
    actionLabel: 'sr-only',
    actionIcon: 'size-4 text-dracula-blue group-hover:text-dracula-light',
  },
  variants: {
    color: {
      success: {
        messageIcon: 'text-dracula-green'
      },
      error: {
        messageIcon: 'text-dracula-red'
      },
      info: {
        messageIcon: 'text-dracula-cyan'
      },
      warning: {
        messageIcon: 'text-dracula-orange'
      }
    }
  }
})
