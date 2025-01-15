import { Check, Cow, GithubLogo, GoogleLogo } from '@phosphor-icons/react'
import { Link } from 'react-router-dom'
import { AuthForm } from '../components'
import { authVariants, formVariants } from '../styles'
import { signInFieldsData } from '../utils'

export const SignIn = () => {
  const signInAuthStyles = authVariants()
  const signInFormStyles = formVariants()

  return (
    <div className={signInAuthStyles.container()}>
      <div className={signInAuthStyles.wrapper()}>
        <Cow className={signInAuthStyles.logo()} aria-hidden={true} weight='duotone' />
        <h2 className={signInAuthStyles.title()}>Moo-ve into your account</h2>
        <AuthForm fieldsData={signInFieldsData}>
          <div className={signInFormStyles.action()}>
            <div className={signInFormStyles.actionRemember()}>
              <div className={signInFormStyles.actionCheckbox()}>
                <input className={signInFormStyles.actionInput()} aria-checked={false} id='remember-me' name='remember-me' type='checkbox' />
                <Check className={signInFormStyles.actionIcon()} aria-hidden={true} weight='duotone' />
              </div>
              <label htmlFor='remember-me'>Remember me</label>
            </div>
            <Link className={signInFormStyles.actionForgot()} to='/'>Forgot password?</Link>
          </div>
          <button className={signInFormStyles.submit()} type='submit'>Sign in</button>
        </AuthForm>
        <div className={signInAuthStyles.divide()}>
          <div className={signInAuthStyles.divideLine()}></div>
          <p className={signInAuthStyles.divideText()}>Or continue with</p>
        </div>
        <div className={signInAuthStyles.connect()}>
          <button className={signInAuthStyles.connectButton()} type='button'>
            <GoogleLogo className={signInAuthStyles.connectIcon()} aria-hidden={true} weight='duotone' />
            <span>Google</span>
          </button>
          <button className={signInAuthStyles.connectButton()} type='button'>
            <GithubLogo className={signInAuthStyles.connectIcon()} aria-hidden={true} weight='duotone' />
            <span>GitHub</span>
          </button>
        </div>
        <p className={signInAuthStyles.account()}>Don&apos;t have an account?{' '}
          <Link className={signInAuthStyles.accountLink()} to='/sign-up'>Sign up</Link>
        </p>
      </div>
    </div>
  )
}
