import { useState } from 'react'
import { Form, Link, useActionData } from 'react-router-dom'
import { Cow, Eye, EyeSlash } from '@phosphor-icons/react'
import { authVariants } from '../styles'

const { container, wrapper, logo, title, form, formGroup, groupInput, groupButton, groupIcon, formButton, formPrivacy, separator, account, accountLink } = authVariants()

export const SignUp = () => {
  const data = useActionData()
  const [showPwd, setShowPwd] = useState<boolean>(false)

  console.log(data)

  return (
    <div className={container()}>
      <div className={wrapper()}>
        <div className={form()}>
          <Cow className={logo()} weight='duotone' />
          <h2 className={title()}>Sign up and join the herd</h2>
        </div>

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
            <div className={separator()}>
              <input className={groupInput()} id='password' name='password' type={!showPwd ? 'password' : 'text'} />
              <button className={groupButton()} onClick={() => setShowPwd((prev) => !prev)} type='button'>
                {!showPwd
                  ? <Eye className={groupIcon()} weight='duotone' />
                  : <EyeSlash className={groupIcon()} weight='duotone' />}
              </button>
            </div>
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
