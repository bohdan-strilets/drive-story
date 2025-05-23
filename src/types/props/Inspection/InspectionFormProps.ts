import { FormMode } from '@/types/types/FormMode'
import { Inspection } from '@/types/types/Inspection'

export type InspectionFormProps = {
	mode: FormMode
	carId: string
	inspection?: Inspection
}
