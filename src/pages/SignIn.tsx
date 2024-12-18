
import { Form, Link, useActionData } from 'react-router-dom'
import { Check, GithubLogo, GoogleLogo } from '@phosphor-icons/react'
import { signInVariants } from '../styles'

const { container, wrapper, title, form, formGroup, groupInput, formButton, formAction, actionForgot, actionRemember, rememberCheckbox, checkboxInput, checkboxIcon, separator, separatorAbsolute, absoluteLine, separatorRelative, relativeText, connect, connectButton, connectIcon, account, accountLink } = signInVariants()

export const SignIn = () => {
  const data = useActionData()
  console.log(data)

  return (
    <div className={container()}>
      <div className={wrapper()}>
        <h2 className={title()}>Sign in to your account</h2>
        <Form className={form()} method='post'>
          <div className={formGroup()}>
            <label htmlFor='email'>Email address</label>
            <input className={groupInput()} id='email' name='email' type='email' />
          </div>
          <div className={formGroup()}>
            <label htmlFor='password'>Password</label>
            <input className={groupInput()} id='password' name='password' type='password' />
          </div>
          <div className={formAction()}>
            <div className={actionRemember()}>
              <div className={rememberCheckbox()}>
                <input className={checkboxInput()} id='remember-me' name='remember-me' type='checkbox' />
                <Check className={checkboxIcon()} weight='bold' />
              </div>
              <label htmlFor='remember-me'>Remember me</label>
            </div>
            <Link to='/' className={actionForgot()}>Forgot password?</Link>
          </div>
          <button className={formButton()} type='submit'>Sign in</button>
        </Form>
        <div className={form()}>
          <div className={separator()}>
            <div className={separatorAbsolute()} aria-hidden='true'>
              <div className={absoluteLine()}></div>
            </div>
            <div className={separatorRelative()}>
              <span className={relativeText()}>Or continue with</span>
            </div>
          </div>
          <div className={connect()}>
            <Link to='/' className={connectButton()}>
              <GoogleLogo className={connectIcon()} weight='duotone' />
              <span>Google</span>
            </Link>
            <Link to='/' className={connectButton()}>
              <GithubLogo className={connectIcon()} weight='duotone' />
              <span>GitHub</span>
            </Link>
          </div>
        </div>
        <p className={account()}>
          Don&apos;t have an account?{' '}
          <Link to={'/signup'} className={accountLink()}>Sign up</Link>
        </p>
      </div>
    </div>
  )
}
