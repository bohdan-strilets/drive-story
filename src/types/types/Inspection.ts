import { InspectionStatus } from '../enums/InspectionStatus'

import { Image } from './Image'

export type Inspection = {
	_id: string
	owner: string
	contactId?: string | null
	carId: string
	inspectionDate: Date
	organization: string
	inspectionStatus: InspectionStatus
	nextInspectionDate?: Date | null
	comments?: string[]
	photos: string | null | Image
	createdAt: Date
	updatedAt: Date
}
