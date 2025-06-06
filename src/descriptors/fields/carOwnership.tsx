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
				? 'Vehicle in use'
				: parsedDateToString(ownership?.saleDate),
	},
]
