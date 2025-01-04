import { ReactNode, useState } from 'react'
import { Form } from 'react-router-dom'
import { formVariants } from '../styles'
import { InputField } from './InputField'
import { useToast } from '../hooks'
import { Field } from '../types'
import { validateForm } from '../utils'

const { form } = formVariants()

export const AuthForm = ({ fieldsData, children }: { fieldsData: Field[]; children: ReactNode }) => {
  const toast = useToast()
  const initialState = fieldsData.reduce((acc, field) => ({ ...acc, [field.name]: '' }), {})
  const [formState, setFormState] = useState<{ [key: string]: string }>(initialState)
  const [errors, setErrors] = useState<{ [key: string]: string }>({})

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const newErrors = validateForm(fieldsData, formState)

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      toast.error({
        title: 'Validation Error',
        message: 'Please fix the errors in the form.',
      })
      return
    }

    toast.success({
      title: 'Successfully Submitted!',
      message: `Welcome, ${formState.email}.`,
    })
  }

  return (
    <Form className={form()} onSubmit={handleSubmit}>
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
