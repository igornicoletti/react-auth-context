export interface FieldBase {
  id: string
  name: string
  label: string
  type: string
  value?: string
  errorMessage?: string
}

export interface Field extends FieldBase {
  isPwd?: boolean
  onChange?: ChangeEventHandler<HTMLInputElement>
  customValidate?: (value: string) => string | null
}
