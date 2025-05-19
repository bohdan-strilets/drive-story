import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import { inspectionRules } from '../rules/inspectionRules'

const { inspectionDate, isInspectionPassed, nextInspectionDate, organization } =
	inspectionRules

export const Schema = yup.object().shape({
	inspectionDate: yup
		.date()
		.min(inspectionDate.min, inspectionDate.message)
		.max(inspectionDate.max, inspectionDate.message)
		.required(inspectionDate.required),

	organization: yup
		.string()
		.trim()
		.min(organization.min, organization.message)
		.max(organization.max, organization.message)
		.required(organization.required),

	isInspectionPassed: yup.boolean().required(isInspectionPassed.required),

	nextInspectionDate: yup
		.date()
		.min(nextInspectionDate.min, nextInspectionDate.message)
		.max(nextInspectionDate.max, nextInspectionDate.message)
		.nullable(),
})

export type Fields = yup.InferType<typeof Schema>
export const Validation = { resolver: yupResolver<Fields>(Schema) }
