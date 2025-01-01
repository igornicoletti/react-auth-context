import { Transition } from '@headlessui/react'
import { CheckCircle, Info, Warning, X, XCircle } from '@phosphor-icons/react'
import { toastVariants } from '../styles'
import { useToast } from '../hooks'
import { Toast } from '../types'

const { action, actionIcon, actionLabel, container, message, messageDesc, messageIcon, messageTitle, messageWrap } = toastVariants()

const getToastIcon = (type: Toast['type']) => {
  const icons = {
    success: <CheckCircle className={messageIcon({ color: type })} aria-hidden={true} weight='duotone' />,
    error: <XCircle className={messageIcon({ color: type })} aria-hidden={true} weight='duotone' />,
    info: <Info className={messageIcon({ color: type })} aria-hidden={true} weight='duotone' />,
    warning: <Warning className={messageIcon({ color: type })} aria-hidden={true} weight='duotone' />,
  }

  return icons[type]
}

export const ToastNotification = () => {
  const { toast, removeToast } = useToast()

  return (
    <>
      {toast.map((toast) => (
        <Transition key={toast.id} show={toast.status}
          enter={'transition ease-out duration-300'}
          enterFrom={'transform translate-y-16 sm:translate-y-0 sm:translate-x-16'}
          enterTo={'transform translate-y-0 sm:translate-x-0'}
          leave={'transition ease-in duration-300'}
          leaveFrom={'transform translate-y-0 sm:translate-x-0'}
          leaveTo={'transform translate-y-16 sm:translate-y-0 sm:translate-x-16'}>
          <div className={container()}>
            <div className={message()}>
              {getToastIcon(toast.type)}
              <div className={messageWrap()}>
                <p className={messageTitle()}>{toast.title}</p>
                {toast.message && <p className={messageDesc()}>{toast.message}</p>}
              </div>
            </div>
            <button className={action()} type='button' onClick={() => { removeToast(toast.id) }}>
              <span className={actionLabel()} aria-hidden={true}>Close</span>
              <X className={actionIcon()} aria-hidden={true} weight='bold' />
            </button>
          </div>
        </Transition>
      ))}
    </>
  )
}

{/*
<XCircle className={messageIcon({ color: toast.type })} aria-hidden={true} weight='duotone' />
<Info className={messageIcon({ color: toast.type })} aria-hidden={true} weight='duotone' />
<Warning className={messageIcon({ color: toast.type })} aria-hidden={true} weight='duotone' />
*/}
