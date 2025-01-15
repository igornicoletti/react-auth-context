import { Eye, EyeSlash } from '@phosphor-icons/react'
import { useState } from 'react'
import { formVariants } from '../styles'
import { Field } from '../types'

export const InputField = ({ id, isPwd, label, name, type, value, errorMessage, onChange }: Field) => {
  const inputFieldStyles = formVariants()
  const [showPwd, setShowPwd] = useState<boolean>(false)

  const handleTogglePwd = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setShowPwd((prev) => !prev)
  }

  const passwordIcon = showPwd
    ? <EyeSlash className={inputFieldStyles.fieldIcon()} aria-hidden={true} weight='duotone' />
    : <Eye className={inputFieldStyles.fieldIcon()} aria-hidden={true} weight='duotone' />

  return (
    <div className={inputFieldStyles.field()}>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        aria-invalid={!!errorMessage}
        type={isPwd && showPwd ? 'text' : type}
        aria-describedby={errorMessage ? `${id}-error` : undefined}
        aria-errormessage={errorMessage ? `${id}-error` : undefined}
        className={inputFieldStyles.fieldInput({ color: errorMessage ? 'error' : undefined })} />
      {errorMessage && <p id={`${id}-error`} className={inputFieldStyles.fieldError()}>{errorMessage}</p>}
      {isPwd && (
        <button
          type='button'
          onClick={handleTogglePwd}
          className={inputFieldStyles.fieldPassword()}
          aria-label={!showPwd ? 'Show password' : 'Hide password'}>
          {passwordIcon}
        </button>
      )}
    </div>
  )
}
