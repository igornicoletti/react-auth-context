import { ReactNode, useState } from 'react'
import { Form } from 'react-router-dom'
import { formVariants } from '../styles'
import { InputField } from './InputField'
import { useToast } from '../hooks'
import { Field } from '../types'
import { validateForm } from '../utils'

const { form, submit } = formVariants()

export const AuthForm = ({ fieldsData, children }: { fieldsData: Field[]; children: ReactNode }) => {
  const toast = useToast()
  const [formState, setFormState] = useState<{ [key: string]: string }>({
    email: '',
    password: '',
  })
  const [errors, setErrors] = useState<{ [key: string]: string }>({})

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const { email, password } = formState
    const newErrors = validateForm(email, password)

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    toast.success({
      title: 'Successfully!',
      message: `Welcome, ${email}.`
    })
  }

  return (
    <Form className={form()} onSubmit={handleSubmit}>
      {fieldsData.map((field) => (
        <InputField
          key={field.id}
          {...field}
          value={formState[field.name]}
          onChange={handleInputChange}
          errorMessage={errors[field.name]}
        />
      ))}
      {children}
      <button className={submit()} type='submit' disabled={!formState.email || !formState.password}>
        Sign in
      </button>
    </Form>
  )
}
