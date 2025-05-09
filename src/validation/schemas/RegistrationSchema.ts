import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { reach } from 'yup'

import { accessRightRules } from '../rules/accessRightRules'
import { userRules } from '../rules/userRules'

import { UserSchema } from './UserSchema'

const firstName = reach(UserSchema, 'firstName') as yup.StringSchema
const lastName = reach(UserSchema, 'lastName') as yup.StringSchema
const email = reach(UserSchema, 'email') as yup.StringSchema
const password = reach(UserSchema, 'password') as yup.StringSchema

const { password: passwordRulles } = userRules
const { isAccessRight } = accessRightRules

export const Schema = yup.object().shape({
	firstName: firstName.defined(),
	lastName: lastName.defined(),
	email: email.defined(),
	password: password.defined(),
	passwordAgain: password
		.defined()
		.oneOf([yup.ref('password')], passwordRulles.oneOfMessage),
	isAccessRight: yup.boolean().oneOf([true], isAccessRight.message),
})

export type Fields = yup.InferType<typeof Schema>
export const Validation = { resolver: yupResolver<Fields>(Schema) }
