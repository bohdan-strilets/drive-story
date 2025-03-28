import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

export const SelectMonthYearSchema = yup.object().shape({
	month: yup.string(),
	year: yup.string(),
})

export type SelectMonthYearFields = yup.InferType<typeof SelectMonthYearSchema>

export const SelectMonthYearValidation = {
	resolver: yupResolver<SelectMonthYearFields>(SelectMonthYearSchema),
}
