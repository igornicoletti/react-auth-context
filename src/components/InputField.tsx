import { useState } from 'react'
import { Eye, EyeSlash } from '@phosphor-icons/react'
import { formVariants } from '../styles'
import { Field } from '../types'

const { field, fieldInput, fieldPassword, fieldIcon } = formVariants()

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
        type={isPwd && showPwd ? 'text' : type}
        className={fieldInput()} />
      {errorMessage && (
        <p id={`${id}-error`} className='text-right text-xs text-dracula-red'>
          {errorMessage}
        </p>
      )}
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
