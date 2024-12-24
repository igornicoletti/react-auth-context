import { Transition } from '@headlessui/react'
import { CheckCircle, X } from '@phosphor-icons/react'
import { useState } from 'react'

export const ToastNotification = (() => {
  const [show, setShow] = useState(true)

  return (
    <Transition show={show}>
      <div className="relative pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg bg-dracula-charcoal shadow-lg ring-1 ring-dracula-charcoal transition data-[closed]:data-[enter]:translate-y-2 data-[enter]:transform data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-100 data-[enter]:ease-out data-[leave]:ease-in data-[closed]:data-[enter]:sm:translate-x-2 data-[closed]:data-[enter]:sm:translate-y-0">
        <div className="flex items-start gap-2 p-4">
          <CheckCircle aria-hidden="true" className="size-5 text-dracula-green" weight='duotone' />
          <div className="grid gap-1">
            <p className="font-semibold text-sm text-dracula-light">Successfully saved!</p>
            <p className="text-sm text-dracula-light">Anyone with a link can now view this file.</p>
          </div>
        </div>
        <button className="group absolute top-0 right-0 p-3 focus:outline-none" type="button" onClick={() => { setShow(false) }}>
          <span className="sr-only">Close</span>
          <X aria-hidden="true" className="size-4 text-dracula-blue group-hover:text-dracula-purple" weight='bold' />
        </button>
      </div>
    </Transition>
  )
})
