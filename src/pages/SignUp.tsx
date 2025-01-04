import { Link } from 'react-router-dom'
import { Cow } from '@phosphor-icons/react'
import { authVariants, formVariants } from '../styles'
import { AuthForm } from '../components'

const { account, accountLink, container, logo, title, wrapper } = authVariants()
const { terms, termsLink, submit } = formVariants()

export const SignUp = () => {
  const fieldsData = [
    { id: 'fullName', name: 'fullName', label: 'Full name', type: 'text', isPwd: false, },
    { id: 'email', name: 'email', label: 'Email', type: 'text', isPwd: false, },
    { id: 'password', name: 'password', label: 'Password', type: 'password', isPwd: true, },
  ]

  return (
    <div className={container()}>
      <div className={wrapper()}>
        <Cow className={logo()} aria-hidden={true} weight='duotone' />
        <h2 className={title()}>Sign up and join the herd</h2>
        <AuthForm fieldsData={fieldsData}>
          <p className={terms()}>By registering, you accept our{' '}
            <Link className={termsLink()} to={'/terms'}>terms of use</Link> and{' '}
            <Link className={termsLink()} to={'/privacy'}>privacy policy</Link>.
          </p>
          <button className={submit()} type='submit'>Sign up</button>
        </AuthForm>
        <p className={account()}>Already have an account?{' '}
          <Link className={accountLink()} to={'/sign-in'}>Sign in</Link>
        </p>
      </div>
    </div>
  )
}
