import { FieldValidation } from '../../hooks/useForm'
import {
  USERNAME_REQUIRED,
  USERNAME_INVALID,
  EMAIL_REQUIRED,
  EMAIL_INVALID,
  PASSWORD_INVALID,
} from '@validation/constants/errors'
import { USERNAME_PATTERN, EMAIL_PATTERN } from '@validation/constants/patterns'

type InitialValues = {
  name: string
  email: string
  password: string
}

export const profileSchema: FieldValidation<InitialValues> = {
  name: {
    required: { value: true, message: USERNAME_REQUIRED },
    pattern: { value: USERNAME_PATTERN, message: USERNAME_INVALID },
  },
  email: {
    required: { value: true, message: EMAIL_REQUIRED },
    pattern: { value: EMAIL_PATTERN, message: EMAIL_INVALID },
  },
  password: {
    minLength: { value: 6, message: PASSWORD_INVALID },
  },
}
