import { tv } from 'tailwind-variants'

const transitions = 'transition duration-200 ease-in-out'
const sizeFull = 'absolute inset-0 flex size-full items-center justify-center'

export const switchVariants = tv({
  slots: {
    switcher: `group relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-dracula-purple ${transitions}`,
    label: 'sr-only',
    thumb: `pointer-events-none relative inline-block size-5 rounded-full transform shadow ring-0 bg-dracula-light group-data-[checked]:translate-x-5 ${transitions}`,
    thumbSun: `${sizeFull} opacity-100 group-data-[checked]:opacity-0 group-data-[checked]:duration-100 group-data-[checked]:ease-out ${transitions}`,
    thumbMoon: `${sizeFull} opacity-0 group-data-[checked]:opacity-100 group-data-[checked]:duration-200 group-data-[checked]:ease-in ${transitions}`,
    thumbIcon: 'size-5 text-dracula-purple',
  },
})
