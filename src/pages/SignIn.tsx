import { Form, Link } from 'react-router-dom'
import { Check, GithubLogo, GoogleLogo } from '@phosphor-icons/react'

export const SignIn = () => {
  return (
    <div className={'flex items-center justify-center min-h-screen bg-dark-gray text-light-gray'}>
      <div className={'mx-auto w-full max-w-lg px-6 py-8 space-y-12'}>
        <h2 className={'text-center text-2xl font-semibold'}>Sign in to your account</h2>
        <Form method={'post'} className={'space-y-6'}>
          <div className={'space-y-4'}>
            <div>
              <label htmlFor={'email'} className={'text-sm font-medium'}>Email</label>
              <input id={'email'} type={'email'} placeholder={'user@example.com'} className={'mt-2 block w-full h-10 rounded-lg bg-charcoal-gray px-3 text-sm placeholder:text-purple-blue focus:outline-none focus:outline-2 focus:-outline-offset-2 focus:outline-lavender-purple'} />
            </div>
            <div>
              <label htmlFor={'password'} className={'text-sm font-medium'}>Password</label>
              <input id={'password'} type={'password'} placeholder={'password123'} className={'mt-2 block w-full h-10 rounded-lg bg-charcoal-gray px-3 text-sm placeholder:text-purple-blue focus:outline-none focus:outline-2 focus:-outline-offset-2 focus:outline-lavender-purple'} />
            </div>
          </div>
          <div className={'flex items-center justify-between'}>
            <div className={'flex items-center gap-2'}>
              <div className={'flex h-6 shrink-0 items-center'}>
                <div className={'group grid size-4 grid-cols-1'}>
                  <input id={'remember-me'} name={'remember-me'} type={'checkbox'} className={'col-start-1 row-start-1 appearance-none rounded border border-lavender-purple checked:bg-lavender-purple indeterminate:bg-lavender-purple focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lavender-purple disabled:bg-lavender-purple disabled:checked:bg-lavender-purple forced-colors:appearance-auto'} />
                  <Check className="pointer-events-none col-start-1 row-start-1 self-center justify-self-center text-sm opacity-0 group-has-[:checked]:opacity-100" weight={'bold'} />
                </div>
              </div>
              <label htmlFor={'remember-me'} className={'text-sm'}>Remember me</label>
            </div>
            <Link to={'#'} className={'font-medium text-sm text-lavender-purple hover:text-lavender-purple/80 transition duration-200 ease-in'}>
              Forgot password?
            </Link>
          </div>
          <button type={'submit'} className={'inline-flex w-full h-10 items-center justify-center rounded-lg bg-lavender-purple px-3 font-semibold hover:bg-lavender-purple/90 transition duration-200 ease-in'}>
            Sign in
          </button>
        </Form>
        <div className={'space-y-6'}>
          <div className={'relative'}>
            <div className={'absolute inset-0 flex items-center'} aria-hidden={'true'}>
              <div className={'w-full border-t border-steel-gray'}></div>
            </div>
            <div className={'relative flex justify-center'}>
              <span className={'bg-dark-gray px-6 text-sm'}>Or continue with</span>
            </div>
          </div>
          <div className={'grid grid-cols-2 gap-4'}>
            <Link to={'#'} className={'flex h-10 w-full items-center justify-center gap-2 rounded-lg border border-steel-gray bg-charcoal-gray px-3 hover:bg-steel-gray transition duration-200 ease-in'}>
              <GoogleLogo className={'text-lavender-purple text-xl'} weight={'duotone'} />
              <span className={'font-medium'}>Google</span>
            </Link>
            <Link to={'#'} className={'flex h-10 w-full items-center justify-center gap-2 rounded-lg border border-steel-gray bg-charcoal-gray px-3 hover:bg-steel-gray transition duration-200 ease-in'}>
              <GithubLogo className={'text-lavender-purple text-xl'} weight={'duotone'} />
              <span className={'font-medium'}>GitHub</span>
            </Link>
          </div>
        </div>
        <p className={'text-center'}>
          Don&apos;t have an account?{' '}
          <Link to={'#'} className={'font-medium text-lavender-purple hover:text-lavender-purple/80 transition duration-200 ease-in'}>
            Sign up.
          </Link>
        </p>
      </div>
    </div>
  )
}
