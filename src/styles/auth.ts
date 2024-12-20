import { tv } from 'tailwind-variants'

const transitions = 'transition duration-300 ease-in'

export const authVariants = tv({
  slots: {
    container: 'grid place-items-center min-h-screen bg-light-gray text-dark-gray dark:bg-dark-gray dark:text-light-gray',
    wrapper: 'mx-auto w-full max-w-lg px-6 py-8 grid gap-10 text-sm font-medium',
    group: 'grid gap-6',
    logo: 'mx-auto text-4xl text-lavender-purple hover:animate-pulse-slow',
    title: 'text-center text-xl font-bold sm:text-2xl',
    divide: 'relative flex justify-center',
    divideLine: 'absolute top-2 w-full border-t border-steel-gray',
    divideTxt: 'relative bg-dark-gray px-6',
    idps: 'grid grid-cols-2 gap-4',
    idpsLink: `flex h-10 items-center justify-center gap-2 rounded-lg border-2 border-lavender-purple/25 bg-lavender-purple/5 hover:bg-lavender-purple/10 px-3 font-semibold  ${transitions}`,
    idpsIcon: 'text-xl text-lavender-purple',
    account: 'text-center text-sm',
    accountLink: `font-semibold text-lavender-purple hover:underline hover:underline-offset-2 ${transitions}`,
  },
})
