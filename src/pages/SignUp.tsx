import { useState } from 'react'
import { Form, Link, useActionData } from 'react-router-dom'
import { Cow, Eye, EyeSlash } from '@phosphor-icons/react'
import { authVariants, formVariants } from '../styles'

const { account, accountLink, logo, title, container, wrapper } = authVariants()
const { form, field, fieldInput, fieldPassword, fieldButton, fieldIcon, terms, termsLink, submit } = formVariants()

export const SignUp = () => {
  const data = useActionData()
  const [showPwd, setShowPwd] = useState<boolean>(false)

  const handleTogglePwd = () =>
    setShowPwd((prev) => !prev)

  console.log(data)

  return (
    <div className={container()}>
      <div className={wrapper()}>
        <Cow className={logo()} weight='duotone' aria-hidden='true' />
        <h2 className={title()}>Sign up and join the herd</h2>
        <Form className={form()} method='post'>
          <div className={field()}>
            <label htmlFor='fullName'>Full name</label>
            <input className={fieldInput()} id='fullName' name='fullName' type='text' />
          </div>
          <div className={field()}>
            <label htmlFor='email'>Email</label>
            <input className={fieldInput()} id='email' name='email' type='email' />
          </div>
          <div className={field()}>
            <label htmlFor='password'>Password</label>
            <div className={fieldPassword()}>
              <input className={fieldInput()} id='password' name='password' type={!showPwd ? 'password' : 'text'} />
              <button className={fieldButton()} onClick={handleTogglePwd} type='button' aria-label={!showPwd ? 'Show password' : 'Hide password'}>
                {!showPwd
                  ? <Eye className={fieldIcon()} weight='duotone' aria-hidden='true' />
                  : <EyeSlash className={fieldIcon()} weight='duotone' aria-hidden='true' />}
              </button>
            </div>
          </div>
          <p className={terms()}>By registering, you accept our{' '}
            <Link className={termsLink()} to={'/terms'}>terms of use</Link> and{' '}
            <Link className={termsLink()} to={'/privacy'}>privacy policy</Link>.
          </p>
          <button className={submit()} type='submit'>Sign up</button>
        </Form>
        <p className={account()}>Already have an account?{' '}
          <Link className={accountLink()} to={'/signin'}>Sign in</Link>
        </p>
      </div>
    </div>
  )
}
