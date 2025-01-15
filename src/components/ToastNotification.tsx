import { Transition } from '@headlessui/react'
import { CheckCircle, Info, Warning, X, XCircle } from '@phosphor-icons/react'
import { useToast } from '../hooks'
import { toastVariants } from '../styles'
import { Toast } from '../types'

export const ToastNotification = () => {
  const toastNotifyStyles = toastVariants()
  const { toasts, removeToast } = useToast()

  const getToastIcon = (type: Toast['type']) => {
    const icons = {
      success: <CheckCircle className={toastNotifyStyles.messageIcon({ color: type })} aria-hidden={true} weight="duotone" />,
      error: <XCircle className={toastNotifyStyles.messageIcon({ color: type })} aria-hidden={true} weight="duotone" />,
      info: <Info className={toastNotifyStyles.messageIcon({ color: type })} aria-hidden={true} weight="duotone" />,
      warning: <Warning className={toastNotifyStyles.messageIcon({ color: type })} aria-hidden={true} weight="duotone" />
    }

    return icons[type]
  }

  return (
    <>
      {toasts.map((toast) => (
        <Transition key={toast.id} show={toast.status} afterLeave={() => removeToast(toast.id)}>
          <div className={toastNotifyStyles.container()}>
            <div className={toastNotifyStyles.message()}>
              {getToastIcon(toast.type)}
              <div className={toastNotifyStyles.messageWrap()}>
                <p className={toastNotifyStyles.messageTitle()}>{toast.title}</p>
                {toast.message && <p className={toastNotifyStyles.messageDesc()}>{toast.message}</p>}
              </div>
            </div>
            <button className={toastNotifyStyles.action()} onClick={() => removeToast(toast.id)} aria-label='Close toast' type='button'>
              <span className={toastNotifyStyles.actionLabel()} aria-hidden={true}>Close</span>
              <X className={toastNotifyStyles.actionIcon()} aria-hidden={true} weight="bold" />
            </button>
          </div>
        </Transition>
      ))}
    </>
  )
}
