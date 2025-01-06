import { Transition } from '@headlessui/react'
import { CheckCircle, Info, Warning, X, XCircle } from '@phosphor-icons/react'
import { toastVariants, toastTransitionVariants } from '../styles'
import { useToast } from '../hooks'
import { Toast } from '../types'

const { action, actionIcon, actionLabel, container, message, messageDesc, messageIcon, messageTitle, messageWrap } = toastVariants()
const { enter, enterFrom, enterTo, leave, leaveFrom, leaveTo } = toastTransitionVariants()

const getToastIcon = (type: Toast['type']) => {
  const icons = {
    success: <CheckCircle className={messageIcon({ color: type })} aria-hidden={true} weight="duotone" />,
    error: <XCircle className={messageIcon({ color: type })} aria-hidden={true} weight="duotone" />,
    info: <Info className={messageIcon({ color: type })} aria-hidden={true} weight="duotone" />,
    warning: <Warning className={messageIcon({ color: type })} aria-hidden={true} weight="duotone" />,
  }

  return icons[type]
}

export const ToastNotification = () => {
  const { toast, removeToast } = useToast()

  return (
    <>
      {toast.map((toast) => (
        <Transition
          key={toast.id}
          show={toast.status}
          enter={enter()}
          enterFrom={enterFrom()}
          enterTo={enterTo()}
          leave={leave()}
          leaveFrom={leaveFrom()}
          leaveTo={leaveTo()}
          afterLeave={() => removeToast(toast.id)}
        >
          <div className={container()}>
            <div className={message()}>
              {getToastIcon(toast.type)}
              <div className={messageWrap()}>
                <p className={messageTitle()}>{toast.title}</p>
                {toast.message && <p className={messageDesc()}>{toast.message}</p>}
              </div>
            </div>
            <button className={action()} onClick={() => removeToast(toast.id)} type='button' aria-label='Close toast'>
              <span className={actionLabel()} aria-hidden={true}>Close</span>
              <X className={actionIcon()} aria-hidden={true} weight="bold" />
            </button>
          </div>
        </Transition>
      ))}
    </>
  )
}
