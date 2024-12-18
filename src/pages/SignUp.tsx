import { Form, Link, useActionData } from 'react-router-dom'
import { signInVariants } from '../styles'

const { container, wrapper, title, form, formGroup, groupInput, formButton, formPrivacy, account, accountLink } = signInVariants()

export const SignUp = () => {
  const data = useActionData()
  console.log(data)

  return (
    <div className={container()}>
      <div className={wrapper()}>
        <h2 className={title()}>Sign up to create your account</h2>
        <Form className={form()} method='post'>
          <div className={formGroup()}>
            <label htmlFor='fullName'>Full name</label>
            <input className={groupInput()} id='fullName' name='fullName' type='text' />
          </div>
          <div className={formGroup()}>
            <label htmlFor='email'>Email address</label>
            <input className={groupInput()} id='email' name='email' type='email' />
          </div>
          <div className={formGroup()}>
            <label htmlFor='password'>Password</label>
            <input className={groupInput()} id='password' name='password' type='password' />
          </div>
          <p className={formPrivacy()}>By registering, you accept our terms of use and ours privacy policy.</p>
          <button className={formButton()} type='submit'>Sign up</button>
        </Form>
        <p className={account()}>
          Already have an account?{' '}
          <Link to={'/'} className={accountLink()}>Sign in</Link>
        </p>
      </div>
    </div>
  )
}
