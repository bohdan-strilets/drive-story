import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { reach } from 'yup'

import { subscribeRules } from '../rules/subscribeRules'

import { UserSchema } from './UserSchema'

const { name } = subscribeRules
const email = reach(UserSchema, 'email') as yup.StringSchema

export const Schema = yup.object().shape({
	name: yup
		.string()
		.trim()
		.min(name.min, name.message)
		.max(name.max, name.message)
		.required(name.required),
	email: email.defined(),
})

export type Fields = yup.InferType<typeof Schema>
export const Validation = { resolver: yupResolver<Fields>(Schema) }
