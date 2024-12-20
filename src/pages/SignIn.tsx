
import { useState } from 'react'
import { Form, Link, useActionData } from 'react-router-dom'
import { Check, Cow, Eye, EyeSlash, GithubLogo, GoogleLogo } from '@phosphor-icons/react'
import { authVariants, formVariants } from '../styles'

const { form, field, fieldInput, fieldPwd, fieldBtn, fieldIcon, action, actionRmb, actionCbx, actionInput, actionIcon, actionFrgt, submit } = formVariants()
const { account, accountLink, divide, divideLine, divideTxt, group, idps, idpsIcon, idpsLink, logo, title, container, wrapper } = authVariants()

export const SignIn = () => {
  const data = useActionData()
  const [showPwd, setShowPwd] = useState<boolean>(false)

  const handleTogglePwd = () => {
    setShowPwd((prev) => !prev)
  }

  console.log(data)

  return (
    <div className={container()}>
      <div className={wrapper()}>
        <div className={group()}>
          <Cow className={logo()} weight='duotone' />
          <h2 className={title()}>Moo-ve into your account</h2>
        </div>
        <Form className={form()} method='post'>
          <div className={field()}>
            <label htmlFor='email'>Email</label>
            <input className={fieldInput()} id='email' name='email' type='email' />
          </div>
          <div className={field()}>
            <label htmlFor='password'>Password</label>
            <div className={fieldPwd()}>
              <input className={fieldInput()} id='password' name='password' type={!showPwd ? 'password' : 'text'} />
              <button className={fieldBtn()} onClick={handleTogglePwd} type='button' aria-label={!showPwd ? 'Show password' : 'Hide password'}>
                {!showPwd
                  ? <Eye className={fieldIcon()} weight='duotone' />
                  : <EyeSlash className={fieldIcon()} weight='duotone' />}
              </button>
            </div>
          </div>
          <div className={action()}>
            <div className={actionRmb()}>
              <div className={actionCbx()}>
                <input className={actionInput()} id='remember-me' name='remember-me' type='checkbox' aria-checked='false' />
                <Check className={actionIcon()} weight='bold' />
              </div>
              <label htmlFor='remember-me'>Remember me</label>
            </div>
            <Link className={actionFrgt()} to='/'>Forgot password?</Link>
          </div>
          <button className={submit()} type='submit'>Sign in</button>
        </Form>
        <div className={group()}>
          <div className={divide()}>
            <div className={divideLine()}></div>
            <p className={divideTxt()}>Or continue with</p>
          </div>
          <div className={idps()}>
            <Link className={idpsLink()} to='/'>
              <GoogleLogo className={idpsIcon()} weight='duotone' />
              <span>Google</span>
            </Link>
            <Link className={idpsLink()} to='/'>
              <GithubLogo className={idpsIcon()} weight='duotone' />
              <span>GitHub</span>
            </Link>
          </div>
        </div>
        <p className={account()}>
          Don&apos;t have an account?{' '}
          <Link className={accountLink()} to='/'>Sign up</Link>
        </p>
      </div>
    </div>
  )
}
