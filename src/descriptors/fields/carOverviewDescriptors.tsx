import { CarBasicInfo } from '@/types/types/CarEntity'
import { FieldDescriptor } from '@/types/types/FieldDescriptor'

export const carOverviewDescriptors: FieldDescriptor<CarBasicInfo>[] = [
	{
		key: 'make',
		label: 'Make',
		render: (basicInfo) => basicInfo?.make || '—',
	},
	{
		key: 'model',
		label: 'Model',
		render: (basicInfo) => basicInfo?.model || '—',
	},
	{
		key: 'year',
		label: 'Year',
		render: (basicInfo) => basicInfo?.year || '—',
	},
	{
		key: 'short-name',
		label: 'Short name',
		render: (basicInfo) => basicInfo?.shortName || '—',
	},
	{
		key: 'generation',
		label: 'Generation',
		render: (basicInfo) => basicInfo?.generation || '—',
	},
]
