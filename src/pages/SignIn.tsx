
import { useState } from 'react'
import { Form, Link, useActionData } from 'react-router-dom'
import { Check, Cow, Eye, EyeSlash, GithubLogo, GoogleLogo } from '@phosphor-icons/react'
import { authVariants, formVariants } from '../styles'
import { useToast } from '../hooks'

const { account, accountLink, divide, divideLine, divideText, connect, connectIcon, connectButton, logo, title, container, wrapper } = authVariants()
const { form, field, fieldInput, fieldPassword, fieldButton, fieldIcon, action, actionRemember, actionCheckbox, actionInput, actionIcon, actionForgot, submit } = formVariants()

export const SignIn = () => {
  const data = useActionData()
  const toast = useToast()
  const [showPwd, setShowPwd] = useState<boolean>(false)

  const handleTogglePwd = () => {
    setShowPwd((prev) => !prev)
  }

  const handleGoogle = () => {
    toast.info({
      title: 'Moo-ve Google!',
      message: 'Welcome to back your account.'
    })
  }

  const handleGithub = () => {
    toast.success({
      title: 'Moo-ve Github!',
      message: 'Welcome to back your account.',
      duration: 10000
    })
  }


  console.log(data)

  return (
    <div className={container()}>
      <div className={wrapper()}>
        <Cow className={logo()} weight='duotone' aria-hidden='true' />
        <h2 className={title()}>Moo-ve into your account</h2>
        <Form className={form()} method='post'>
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
          <div className={action()}>
            <div className={actionRemember()}>
              <div className={actionCheckbox()}>
                <input className={actionInput()} id='remember-me' name='remember-me' type='checkbox' aria-checked='false' />
                <Check className={actionIcon()} weight='bold' aria-hidden='true' />
              </div>
              <label htmlFor='remember-me'>Remember me</label>
            </div>
            <Link className={actionForgot()} to='/'>Forgot password?</Link>
          </div>
          <button className={submit()} type='submit'>Sign in</button>
        </Form>
        <div className={divide()}>
          <div className={divideLine()}></div>
          <p className={divideText()}>Or continue with</p>
        </div>
        <div className={connect()}>
          <button className={connectButton()} type='button' onClick={handleGoogle}>
            <GoogleLogo className={connectIcon()} weight='duotone' aria-hidden='true' />
            <span>Google</span>
          </button>
          <button className={connectButton()} type='button' onClick={handleGithub}>
            <GithubLogo className={connectIcon()} weight='duotone' aria-hidden='true' />
            <span>GitHub</span>
          </button>
        </div>
        <p className={account()}>Don&apos;t have an account?{' '}
          <Link className={accountLink()} to='/signup'>Sign up</Link>
        </p>
      </div>
    </div>
  )
}
