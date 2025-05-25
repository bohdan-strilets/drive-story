import { Address, Contact } from '../types/Contact'

export type AddressDto = Pick<
	Address,
	'city' | 'country' | 'houseNumber' | 'postalCode' | 'street'
>

export type ContactDto = Pick<
	Contact,
	| 'name'
	| 'phone'
	| 'email'
	| 'mapLink'
	| 'website'
	| 'workingHours'
	| 'specializations'
> & {
	address: AddressDto
}
