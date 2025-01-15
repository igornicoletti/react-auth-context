import { tv } from 'tailwind-variants'

const transitions = 'transition duration-300 ease-in'
const focusVisible = 'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-dracula-purple'

export const switchVariants = tv({
  slots: {
    switch: `group relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-dracula-purple ${focusVisible} ${transitions}`,
    label: 'sr-only',
    thumb: `pointer-events-none relative inline-block size-5 rounded-full transform shadow ring-0 bg-dracula-light group-data-[checked]:translate-x-5 ${transitions}`,
    iconSun: `absolute inset-0 flex size-full items-center justify-center opacity-100 group-data-[checked]:opacity-0 group-data-[checked]:duration-100 group-data-[checked]:ease-out ${transitions}`,
    iconMoon: `absolute inset-0 flex size-full items-center justify-center opacity-0 group-data-[checked]:opacity-100 group-data-[checked]:duration-300 group-data-[checked]:ease-in ${transitions}`,
    icon: 'size-5 text-dracula-purple',
  },
})
