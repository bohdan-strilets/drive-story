import { Contact } from '../types/Contact'

export const isContact = (value: string | null | Contact): value is Contact => {
	return value !== null && typeof value === 'object' && '_id' in value
}
