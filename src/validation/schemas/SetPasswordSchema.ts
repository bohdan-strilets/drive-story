import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { reach } from 'yup'

import { userRules } from '../rules/userRules'

import { UserSchema } from './UserSchema'

const { password: passwordRulles } = userRules
const password = reach(UserSchema, 'password') as yup.StringSchema

export const Schema = yup.object().shape({
	password: password.defined().defined(),
	passwordAgain: password
		.defined()
		.oneOf([yup.ref('password')], passwordRulles.oneOfMessage),
})

export type Fields = yup.InferType<typeof Schema>
export const Validation = { resolver: yupResolver<Fields>(Schema) }
