import { CarEntity } from '@/types/types/CarEntity'
import { FormMode } from '@/types/types/FormMode'

export type CarFormProps = {
	mode: FormMode
	car?: CarEntity
}
