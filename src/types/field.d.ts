export interface Field {
  id: string
  name: string
  label: string
  value?: string
  type: string
  isPwd: boolean
  onChange?: ChangeEventHandler<HTMLInputElement>
  errorMessage?: string
}
