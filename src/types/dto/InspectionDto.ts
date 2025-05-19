import { InspectionStatus } from '../enums/InspectionStatus'

export type InspectionDto = {
	inspectionDate: Date
	organization: string
	inspectionStatus: InspectionStatus
	nextInspectionDate?: Date | null
	comments?: string[]
}
