import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { reach } from 'yup'

import { Location } from '@/types/types/User'

import { UserSchema } from './UserSchema'

const firstName = reach(UserSchema, 'firstName') as yup.StringSchema
const lastName = reach(UserSchema, 'lastName') as yup.StringSchema
const nickname = reach(UserSchema, 'nickname') as yup.StringSchema
const birthDate = reach(UserSchema, 'birthDate') as yup.DateSchema
const phoneNumber = reach(UserSchema, 'phoneNumber') as yup.StringSchema
const gender = reach(UserSchema, 'gender') as yup.StringSchema
const location = reach(UserSchema, 'location') as yup.ObjectSchema<Location>

export const Schema = yup.object().shape({
	firstName: firstName.defined(),
	lastName: lastName.defined(),
	nickname: nickname,
	birthDate: birthDate,
	phoneNumber: phoneNumber,
	gender: gender.defined(),
	location: location,
})

export type Fields = yup.InferType<typeof Schema>
export const Validation = { resolver: yupResolver<Fields>(Schema) }
