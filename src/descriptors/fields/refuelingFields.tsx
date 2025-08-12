import { getFuelLabel } from '@/utils/fuelMeta'
import { parsedDateToString } from '@/utils/parsedDateToString'

import { FieldDescriptor } from '@/types/types/FieldDescriptor'
import { Fueling } from '@/types/types/Fueling'

export const refuelingFields: FieldDescriptor<Fueling>[] = [
	{
		key: 'fuel-type',
		label: 'Fuel Type',
		render: (fueling) => getFuelLabel(fueling?.fuelType),
	},
	{
		key: 'fueling-date',
		label: 'Fueling Date',
		render: (fueling) => parsedDateToString(fueling?.fuelingDate),
	},
	{
		key: 'price-per-unit',
		label: 'Price per Unit',
		render: (fueling) => `${fueling?.pricePerUnit} PLN`,
	},
	{
		key: 'quantity',
		label: 'Quantity',
		render: (fueling) => `${fueling?.quantity} L`,
	},
	{
		key: 'total-cost',
		label: 'Total Cost',
		render: (fueling) => `${fueling?.totalCost} PLN`,
	},
]
