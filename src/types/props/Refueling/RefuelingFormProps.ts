import { FormMode } from '@/types/types/FormMode'
import { Fueling } from '@/types/types/Fueling'

export type RefuelingFormProps = {
	mode: FormMode
	carId: string
	refueling?: Fueling
}
