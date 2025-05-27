import { Contact } from '@/types/types/Contact'
import { FormMode } from '@/types/types/FormMode'

export type ContactFormProps = {
	mode: FormMode
	contact?: Contact
}
