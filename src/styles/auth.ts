import { tv } from 'tailwind-variants'

const transitions = 'transition duration-200 ease-in-out'

export const authVariants = tv({
  slots: {
    container: 'grid items-center min-h-screen text-sm text-dracula-light',
    wrapper: 'grid gap-6 p-6 mx-auto w-full max-w-lg',
    logo: 'mx-auto size-12 text-dracula-purple',
    title: 'text-center font-bold text-xl md:text-2xl',
    divide: 'relative flex items-center justify-center',
    divideLine: 'absolute w-full h-0 border border-dracula-steel',
    divideText: 'relative px-6 bg-dracula-dark',
    connect: 'grid grid-cols-2 gap-4 pb-6',
    connectButton: `flex items-center justify-center h-10 gap-2 px-4 uppercase rounded-lg border font-medium bg-dracula-purple/10 border-dracula-purple/50 hover:bg-dracula-purple/25 hover:border-dracula-purple group ${transitions}`,
    connectIcon: '-mt-0.5 size-5 text-dracula-purple',
    account: 'text-center font-medium',
    accountLink: `font-semibold text-dracula-purple/90 hover:text-dracula-purple ${transitions}`,
  },
})
