import { Address } from '@/types/types/Contact'
import { FieldDescriptor } from '@/types/types/FieldDescriptor'

export const addressFields: FieldDescriptor<Address>[] = [
	{
		key: 'country',
		label: 'Country',
		render: (address) => address?.country || '—',
	},
	{
		key: 'city',
		label: 'City',
		render: (address) => address?.city || '—',
	},
	{
		key: 'street',
		label: 'Street',
		render: (address) => address?.street || '—',
	},
	{
		key: 'house-number',
		label: 'House number',
		render: (address) => address?.houseNumber || '—',
	},
	{
		key: 'postal-code',
		label: 'Postal code',
		render: (address) => address?.postalCode || '—',
	},
]
