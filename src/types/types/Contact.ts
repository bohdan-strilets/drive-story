import { Image } from './Image'

export type Address = {
	street: string
	houseNumber: string
	city: string
	country: string
	postalCode?: string | null
}

export type Contact = {
	_id: string
	owner: string
	name: string
	phone: string
	email?: string | null
	address: Address
	mapLink?: string | null
	website?: string | null
	workingHours?: [string, string]
	specializations?: string[]
	photos: string | Image | null
	createdAt: Date
	updatedAt: Date
}
