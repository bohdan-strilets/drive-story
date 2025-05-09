import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { reach } from 'yup'

import { UserSchema } from './UserSchema'

const email = reach(UserSchema, 'email') as yup.StringSchema

export const Schema = yup.object().shape({
	email: email.defined(),
})

export type Fields = yup.InferType<typeof Schema>
export const Validation = { resolver: yupResolver<Fields>(Schema) }
