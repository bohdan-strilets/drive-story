import { convertEngineVolume } from '@/utils/convertEngineVolume'
import { formatNumberWithSpaces } from '@/utils/formatNumberWithSpaces'
import { formatLabel } from '@/utils/generateDropdownOptions'

import { CarSpecs } from '@/types/types/CarEntity'
import { FieldDescriptor } from '@/types/types/FieldDescriptor'

export const carSpecs: FieldDescriptor<CarSpecs>[] = [
	{
		key: 'mileage',
		label: 'Mileage',
		render: (specifications) =>
			`${formatNumberWithSpaces(specifications?.mileage || 0)} km`,
	},
	{
		key: 'fuel-type',
		label: 'Fuel type',
		render: (specifications) => formatLabel(specifications?.fuelType || '—'),
	},
	{
		key: 'transmission',
		label: 'Transmission',
		render: (specifications) =>
			formatLabel(specifications?.transmission || '—'),
	},
	{
		key: 'drivetrain',
		label: 'Drivetrain',
		render: (specifications) => formatLabel(specifications?.drivetrain || '—'),
	},
	{
		key: 'body-type',
		label: 'Body type',
		render: (specifications) => formatLabel(specifications?.bodyType || '—'),
	},
	{
		key: 'engine-volume',
		label: 'Engine volume',
		render: (specifications) =>
			`${convertEngineVolume(specifications?.engine?.volume || 0)} L`,
	},
	{
		key: 'engine-power',
		label: 'Engine power',
		render: (specifications) => `${specifications?.engine?.power} KM`,
	},
	{
		key: 'number-of-seats',
		label: 'Number of seats',
		render: (specifications) => specifications?.seats || 0,
	},
]
