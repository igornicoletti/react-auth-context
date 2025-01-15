import { ReactNode, useMemo, useState } from 'react'
import { Form } from 'react-router-dom'
import { useToast } from '../hooks'
import { formVariants } from '../styles'
import { Field, ValidationError } from '../types'
import { validateForm } from '../utils'
import { InputField } from './'

export const AuthForm = ({ fieldsData, children }: { fieldsData: Field[]; children: ReactNode }) => {
  const authFormStyles = formVariants()

  const toast = useToast()

  const initialState = useMemo(() =>
    fieldsData.reduce((acc, field) =>
      ({ ...acc, [field.name]: '' }), {}), [fieldsData])

  const [formState, setFormState] = useState<Record<string, string>>(initialState)

  const [errors, setErrors] = useState<Record<string, string>>({})

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const newErrors: ValidationError[] = validateForm(fieldsData, formState)

    if (newErrors.length > 0) {
      const errorMap = Object.fromEntries(newErrors.map((error) => [error.field, error.message]))
      setErrors(errorMap)
      toast.error({
        title: 'Oops...',
        message: `Please check the following fields: ${newErrors.map((err) => err.field).join(', ')}.`,
      })
      return
    }

    toast.success({
      title: 'Moooo...',
      message: `Welcome back, ${formState.email}`,
    })
  }

  return (
    <Form className={authFormStyles.form()} onSubmit={handleSubmit}>
      {fieldsData.map((field) => (
        <InputField
          {...field}
          key={field.id}
          onChange={handleInputChange}
          value={formState[field.name]}
          errorMessage={errors[field.name]} />
      ))}
      {children}
    </Form>
  )
}
