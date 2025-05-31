import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

export const Schema = yup.object().shape({
	searchQuery: yup.string().trim().min(1).max(100).optional(),
})

export type Fields = yup.InferType<typeof Schema>
export const Validation = { resolver: yupResolver<Fields>(Schema) }
