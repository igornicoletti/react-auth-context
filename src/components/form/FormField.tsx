import { useState } from 'react'
import { formVariants } from '../../styles'
import { Eye, EyeSlash } from '@phosphor-icons/react'

const { field, fieldInput, fieldPassword, fieldIcon } = formVariants()

export interface Field {
  id: string
  name: string
  label: string
  value?: string
  type: string
  isPwd: boolean
}

export const FormField = ({ id, isPwd, label, name, type }: Field) => {
  const [showPwd, setShowPwd] = useState<boolean>(false)

  const handleTogglePwd = () => setShowPwd((prev) => !prev)

  return (
    <div className={field()}>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        name={name}
        type={isPwd && showPwd ? 'text' : type}
        className={fieldInput()} />
      {isPwd && (
        <button className={fieldPassword()} onClick={handleTogglePwd} type='button' aria-label={!showPwd ? 'Show password' : 'Hide password'}>
          {!showPwd
            ? <Eye className={fieldIcon()} weight='duotone' aria-hidden={true} />
            : <EyeSlash className={fieldIcon()} weight='duotone' aria-hidden={true} />}
        </button>
      )}
    </div>
  )
}
