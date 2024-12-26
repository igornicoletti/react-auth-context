import { tv } from 'tailwind-variants'

const transitions = 'transition duration-300 ease-in-out'

export const authVariants = tv({
  slots: {
    container: 'grid items-center min-h-screen text-sm text-dracula-light',
    wrapper: 'grid gap-6 p-6 mx-auto w-full max-w-lg',
    logo: 'mx-auto size-12 text-dracula-purple',
    title: 'text-center font-bold text-xl sm:text-2xl',
    divide: 'relative flex items-center justify-center',
    divideLine: 'absolute w-full border-t border-dracula-steel',
    divideText: 'relative px-6 bg-dracula-dark',
    connect: 'grid grid-cols-2 gap-4 pb-4',
    connectButton: `flex items-center justify-center h-10 gap-2 px-4 uppercase rounded-lg font-medium border border-dracula-purple/50 hover:border-dracula-purple bg-dracula-purple/10 hover:bg-dracula-purple/25 ${transitions}`,
    connectIcon: 'size-5 text-dracula-purple',
    account: 'text-center font-medium',
    accountLink: `font-semibold text-dracula-purple hover:text-dracula-purple/90 ${transitions}`,
  },
})
