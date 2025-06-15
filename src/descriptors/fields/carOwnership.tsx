import { formatNumberWithSpaces } from '@/utils/formatNumberWithSpaces'
import { parsedDateToString } from '@/utils/parsedDateToString'

import { CarOwnership } from '@/types/types/CarEntity'
import { FieldDescriptor } from '@/types/types/FieldDescriptor'

export const carOwnership: FieldDescriptor<CarOwnership>[] = [
	{
		key: 'date-of-purchase',
		label: 'Date of purchase',
		render: (ownership) => parsedDateToString(ownership?.purchaseDate),
	},
	{
		key: 'price-of-purchase',
		label: 'Price of purchase',
		render: (ownership) =>
			`${formatNumberWithSpaces(ownership?.purchasePrice || 0)} PLN`,
	},
	{
		key: 'date-of-sale',
		label: 'Date of sale',
		render: (ownership) =>
			ownership?.isSold ? parsedDateToString(ownership?.saleDate) : '—',
	},
	{
		key: 'price-of-sale',
		label: 'Price of sale',
		render: (ownership) =>
			ownership?.isSold
				? `${formatNumberWithSpaces(ownership?.salePrice || 0)} PLN`
				: '—',
	},
]
