import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

export const Schema = yup.object().shape({
	month: yup.string(),
	year: yup.string(),
})

export type Fields = yup.InferType<typeof Schema>
export const Validation = { resolver: yupResolver<Fields>(Schema) }
