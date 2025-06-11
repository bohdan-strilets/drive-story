import { formatNumberWithSpaces } from '@/utils/formatNumberWithSpaces'
import { isWithinThreshold } from '@/utils/isWithinThreshold'
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
		key: 'date-of-sale',
		label: 'Date of sale',
		render: (ownership) =>
			isWithinThreshold(new Date())
				? 'The car hasn’t been sold yet'
				: parsedDateToString(ownership?.saleDate),
	},
	{
		key: 'price-of-purchase',
		label: 'Price of purchase',
		render: (ownership) =>
			`${formatNumberWithSpaces(ownership?.purchasePrice || 0)} PLN`,
	},
	{
		key: 'price-of-sale',
		label: 'Price of sale',
		render: (ownership) =>
			ownership?.salePrice && ownership?.salePrice > 0
				? `${formatNumberWithSpaces(ownership?.salePrice || 0)} PLN`
				: 'The car hasn’t been sold yet',
	},
]
