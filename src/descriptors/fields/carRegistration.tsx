import { parsedDateToString } from '@/utils/parsedDateToString'

import { CarRegistration } from '@/types/types/CarEntity'
import { FieldDescriptor } from '@/types/types/FieldDescriptor'

export const carRegistration: FieldDescriptor<CarRegistration>[] = [
	{
		key: 'vin-number',
		label: 'Vin number',
		render: (registration) => registration?.vin || '—',
	},
	{
		key: 'registration-number',
		label: 'Registration number',
		render: (registration) => registration?.regNumber || '—',
	},
	{
		key: 'date-of-first-registration',
		label: 'Date of first registration',
		render: (registration) => parsedDateToString(registration?.firstRegDate),
	},
]
