import { InspectionDto } from '../dto/InspectionDto'

export type UpdateInspectionParams = {
	payload: InspectionDto
	carId: string
	inspectionId: string
}
