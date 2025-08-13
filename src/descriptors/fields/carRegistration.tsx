import { parsedDateToString } from '@/utils/parsedDateToString'

import { CarRegistration } from '@/types/types/CarEntity'
import { FieldDescriptor } from '@/types/types/FieldDescriptor'

export const carRegistration: FieldDescriptor<CarRegistration>[] = [
	{
		key: 'vin-number',
		label: 'Vin number',
		render: (registration) => (
			<p style={{ textTransform: 'uppercase' }}>{registration?.vin || '—'}</p>
		),
	},
	{
		key: 'registration-number',
		label: 'Registration number',
		render: (registration) => (
			<p style={{ textTransform: 'uppercase' }}>
				{registration?.regNumber || '—'}
			</p>
		),
	},
	{
		key: 'date-of-first-registration',
		label: 'Date of first registration',
		render: (registration) => parsedDateToString(registration?.firstRegDate),
	},
]
