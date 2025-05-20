import { FormMode } from '@/types/types/FormMode'
import { Insurance } from '@/types/types/Insurance'

export type InsuranceFormProps = {
	mode: FormMode
	carId: string
	insurance?: Insurance
}
