import { Link } from 'react-router-dom'
import { Check, Cow, GithubLogo, GoogleLogo } from '@phosphor-icons/react'
import { authVariants, formVariants } from '../styles'
import { AuthForm } from '../components'

const { account, accountLink, divide, divideLine, divideText, connect, connectIcon, connectButton, container, logo, title, wrapper } = authVariants()
const { action, actionRemember, actionCheckbox, actionInput, actionIcon, actionForgot, submit } = formVariants()

export const SignIn = () => {
  const fieldsData = [
    { id: 'email', name: 'email', label: 'Email', type: 'text', isPwd: false, },
    { id: 'password', name: 'password', label: 'Password', type: 'password', isPwd: true, },
  ]

  return (
    <div className={container()}>
      <div className={wrapper()}>
        <Cow className={logo()} aria-hidden={true} weight='duotone' />
        <h2 className={title()}>Moo-ve into your account</h2>
        <AuthForm fieldsData={fieldsData}>
          <div className={action()}>
            <div className={actionRemember()}>
              <div className={actionCheckbox()}>
                <input className={actionInput()} id='remember-me' name='remember-me' type='checkbox' aria-checked={false} />
                <Check className={actionIcon()} aria-hidden={true} weight='duotone' />
              </div>
              <label htmlFor='remember-me'>Remember me</label>
            </div>
            <Link className={actionForgot()} to='/'>Forgot password?</Link>
          </div>
          <button className={submit()} type='submit'>Sign in</button>
        </AuthForm>
        <div className={divide()}>
          <div className={divideLine()}></div>
          <p className={divideText()}>Or continue with</p>
        </div>
        <div className={connect()}>
          <button className={connectButton()} type='button'>
            <GoogleLogo className={connectIcon()} aria-hidden={true} weight='duotone' />
            <span>Google</span>
          </button>
          <button className={connectButton()} type='button'>
            <GithubLogo className={connectIcon()} aria-hidden={true} weight='duotone' />
            <span>GitHub</span>
          </button>
        </div>
        <p className={account()}>Don&apos;t have an account?{' '}
          <Link className={accountLink()} to='/sign-up'>Sign up</Link>
        </p>
      </div>
    </div>
  )
}
