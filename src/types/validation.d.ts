export type ValidationError = {
  field: string
  message: string
}

export type ValidationStrategy = (value: string) => string | null

export interface ValidationField {
  id: string
  name: string
  label: string
  type: string
  validate?: ValidationStrategy
}
