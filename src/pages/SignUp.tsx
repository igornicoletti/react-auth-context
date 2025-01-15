import { Cow } from '@phosphor-icons/react'
import { Link } from 'react-router-dom'
import { AuthForm } from '../components'
import { authVariants, formVariants } from '../styles'
import { signUpFieldsData } from '../utils'

export const SignUp = () => {
  const signUpAuthStyles = authVariants()
  const signUpFormStyles = formVariants()

  return (
    <div className={signUpAuthStyles.container()}>
      <div className={signUpAuthStyles.wrapper()}>
        <Cow className={signUpAuthStyles.logo()} aria-hidden={true} weight='duotone' />
        <h2 className={signUpAuthStyles.title()}>Sign up and join the herd</h2>
        <AuthForm fieldsData={signUpFieldsData}>
          <p className={signUpFormStyles.terms()}>By registering, you accept our{' '}
            <Link className={signUpFormStyles.termsLink()} to={'/terms'}>terms of use</Link> and{' '}
            <Link className={signUpFormStyles.termsLink()} to={'/privacy'}>privacy policy</Link>.
          </p>
          <button className={signUpFormStyles.submit()} type='submit'>Sign up</button>
        </AuthForm>
        <p className={signUpAuthStyles.account()}>Already have an account?{' '}
          <Link className={signUpAuthStyles.accountLink()} to={'/sign-in'}>Sign in</Link>
        </p>
      </div>
    </div>
  )
}
