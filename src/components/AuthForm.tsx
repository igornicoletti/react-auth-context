import { ReactNode, useState } from 'react'
import { Form } from 'react-router-dom'
import { formVariants } from '../styles'
import { InputField } from './'
import { useToast } from '../hooks'
import { Field, ValidationError } from '../types'
import { validateForm } from '../utils'

const { form } = formVariants()

export const AuthForm = ({ fieldsData, children }: { fieldsData: Field[]; children: ReactNode }) => {
  const toast = useToast()
  const initialState = fieldsData.reduce((acc, field) => ({ ...acc, [field.name]: '' }), {})
  const [formState, setFormState] = useState<{ [key: string]: string }>(initialState)
  const [errors, setErrors] = useState<{ [key: string]: string }>({})

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormState({ ...formState, [name]: value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const newErrors: ValidationError[] = validateForm(fieldsData, formState)

    const errorMap: { [key: string]: string } = {}
    newErrors.forEach((error) => {
      errorMap[error.field] = error.message
    })

    if (newErrors.length > 0) {
      setErrors(errorMap)
      toast.error({
        title: 'Validation Error',
        message: 'Please fix the errors in the form.',
        duration: 10000
      })
      return
    }

    toast.success({
      title: 'Successfully Submitted!',
      message: `Welcome, ${formState.email}.`,
      duration: 10000
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

/*
const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
  const { name, value } = e.target
  setFormState((prev) => ({ ...prev, [name]: value }))
}, [])

const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  const { name, value } = e.target
  setFormState({ ...formState, [name]: value })
}
 */
