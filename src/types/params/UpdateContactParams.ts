import { ContactDto } from '../dto/ContactDto'

export type UpdateContactParams = {
	payload: ContactDto
	contactId?: string
}
