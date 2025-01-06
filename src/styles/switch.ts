import { tv } from 'tailwind-variants'

const transitions = 'transition duration-300 ease-in'
const sizeFull = 'absolute inset-0 flex size-full items-center justify-center'
const focusvisible = 'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-dracula-purple'

export const switchVariants = tv({
  slots: {
    switcher: `group relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-dracula-purple ${focusvisible} ${transitions}`,
    label: 'sr-only',
    thumb: `pointer-events-none relative inline-block size-5 rounded-full transform shadow ring-0 bg-dracula-light group-data-[checked]:translate-x-5 ${transitions}`,
    thumbSun: `${sizeFull} opacity-100 group-data-[checked]:opacity-0 group-data-[checked]:duration-100 group-data-[checked]:ease-out ${transitions}`,
    thumbMoon: `${sizeFull} opacity-0 group-data-[checked]:opacity-100 group-data-[checked]:duration-300 group-data-[checked]:ease-in ${transitions}`,
    thumbIcon: 'size-5 text-dracula-purple',
  },
})
