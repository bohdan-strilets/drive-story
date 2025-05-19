import { Inspection } from '../types/Inspection'

export type InspectionDto = Pick<
	Inspection,
	| 'inspectionDate'
	| 'organization'
	| 'isInspectionPassed'
	| 'nextInspectionDate'
	| 'comments'
>
