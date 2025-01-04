export interface ValidationField {
  label: string
  name: string
  type: string
}

export type ValidationError = {
  field: string
  message: string
}
