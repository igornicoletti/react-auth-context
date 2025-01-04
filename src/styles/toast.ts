import { tv } from 'tailwind-variants'

export const toastVariants = tv({
  slots: {
    container: 'relative pointer-events-auto min-w-80 max-w-md overflow-hidden rounded-lg bg-dracula-charcoal shadow-lg ring-1 ring-dracula-charcoal',
    message: 'flex items-start gap-3 p-4 pr-10',
    messageIcon: 'shrink-0 size-5 text-dracula-green',
    messageWrap: 'grid gap-1',
    messageTitle: 'font-semibold sm:text-sm text-dracula-light',
    messageDesc: 'text-sm text-dracula-light/75',
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


export const toastTransitionVariants = tv({
  slots: {
    enter: 'transition ease-out duration-300',
    enterFrom: 'transform translate-y-16 sm:translate-y-0 sm:translate-x-16',
    enterTo: 'transform translate-y-0 sm:translate-x-0',
    leave: 'transition ease-in duration-300',
    leaveFrom: 'transform translate-y-0 sm:translate-x-0',
    leaveTo: 'transform translate-y-16 sm:translate-y-0 sm:translate-x-16',
  }
})
