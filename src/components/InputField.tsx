import { useState } from 'react'
import { Eye, EyeSlash } from '@phosphor-icons/react'
import { formVariants } from '../styles'
import { Field } from '../types'

const { field, fieldError, fieldIcon, fieldInput, fieldPassword } = formVariants()

export const InputField = ({ id, isPwd, label, name, type, value, errorMessage, onChange }: Field) => {
  const [showPwd, setShowPwd] = useState<boolean>(false)
  const handleTogglePwd = () => setShowPwd((prev) => !prev)

  return (
    <div className={field()}>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        aria-invalid={!!errorMessage}
        type={isPwd && showPwd ? 'text' : type}
        aria-describedby={errorMessage ? `${id}-error` : undefined}
        className={fieldInput({ color: errorMessage ? 'error' : undefined })} />
      {errorMessage && <p id={`${id}-error`} className={fieldError()}>{errorMessage}</p>}
      {isPwd && (
        <button className={fieldPassword()} onClick={handleTogglePwd} aria-label={!showPwd ? 'Show password' : 'Hide password'} type='button'>
          {!showPwd
            ? <Eye className={fieldIcon()} aria-hidden={true} weight='duotone' />
            : <EyeSlash className={fieldIcon()} aria-hidden={true} weight='duotone' />}
        </button>
      )}
    </div>
  )
}
