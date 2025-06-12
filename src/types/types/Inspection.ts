import { Contact } from './Contact'
import { Image } from './Image'

export type Inspection = {
	_id: string
	owner: string
	contactId: string | null | Contact
	carId: string
	inspectionDate: Date
	organization: string
	isInspectionPassed: boolean
	nextInspectionDate?: Date | null
	comments?: string[]
	photos: string | null | Image
	createdAt: Date
	updatedAt: Date
}
