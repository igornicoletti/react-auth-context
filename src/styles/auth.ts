import { tv } from 'tailwind-variants'

const transitions = 'transition duration-300 ease-in-out'
const focusVisible = 'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-dracula-purple'

export const authVariants = tv({
  slots: {
    container: 'grid items-center min-h-screen p-6 text-sm font-medium text-dracula-dark dark:text-dracula-light',
    wrapper: 'grid gap-6 mx-auto w-full max-w-lg',
    logo: 'mx-auto size-12 text-dracula-purple',
    title: 'text-center font-bold text-2xl text-dracula-purple',
    divide: 'relative flex items-center justify-center',
    divideLine: 'absolute w-full -mt-1 border-t border-dracula-blue/25',
    divideText: 'relative px-6 bg-dracula-light dark:bg-dracula-dark',
    connect: 'grid grid-cols-2 gap-4 pb-4',
    connectButton: `flex items-center justify-center h-10 gap-2 px-4 uppercase rounded-lg border
    border-dracula-purple/50 hover:border-dracula-purple bg-dracula-purple/5 hover:bg-dracula-purple/10 ${focusVisible} ${transitions}`,
    connectIcon: 'size-5 text-dracula-purple',
    account: 'text-center',
    accountLink: `font-semibold text-dracula-purple ${focusVisible} ${transitions}`,
  },
})
