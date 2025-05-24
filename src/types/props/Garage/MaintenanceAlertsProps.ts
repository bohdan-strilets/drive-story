import { CarEntity } from '@/types/types/CarEntity'

export type MaintenanceAlertsProps = Pick<
	CarEntity,
	'insurance' | 'inspection'
> & {
	carId: string
	oilService: {
		inspectionId?: string | null
		nextService?: Date | null
	} | null
}

export type ItemProps = {
	isDatePassed: boolean
	hasEntity: boolean
}
