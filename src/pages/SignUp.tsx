import { Form, Link, useActionData } from 'react-router-dom'
import { Cow } from '@phosphor-icons/react'
import { authVariants, formVariants } from '../styles'
import { FormField } from '../components/form/FormField'

const { account, accountLink, logo, title, container, wrapper } = authVariants()
const { form, terms, termsLink, submit } = formVariants()

const fieldsData = [
  { id: 'fullName', name: 'fullName', label: 'Full name', type: 'text', isPwd: false, },
  { id: 'email', name: 'email', label: 'Email', type: 'text', isPwd: false, },
  { id: 'password', name: 'password', label: 'Password', type: 'password', isPwd: true, },
]

export const SignUp = () => {
  const data = useActionData()
  console.log(data)

  return (
    <div className={container()}>
      <div className={wrapper()}>
        <Cow className={logo()} weight='duotone' aria-hidden={true} />
        <h2 className={title()}>Sign up and join the herd</h2>
        <Form className={form()} method='post'>
          {fieldsData.map((field) => (
            <FormField key={field.id} {...field} />
          ))}
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
