import StatusBadge from '@/components/UI/StatusBadge'

import { parsedDateToString } from '@/utils/parsedDateToString'

import { FieldDescriptor } from '@/types/types/FieldDescriptor'
import { Inspection } from '@/types/types/Inspection'

export const inspectionField: FieldDescriptor<Inspection>[] = [
	{
		key: 'organization',
		label: 'Inspecting organization',
		render: (inspection) => inspection?.organization || '—',
	},
	{
		key: 'inspection-date',
		label: 'Date of inspection',
		render: (inspection) =>
			parsedDateToString(inspection?.inspectionDate) || '—',
	},
	{
		key: 'is-inspection-passed',
		label: 'Inspection passed',
		render: (inspection) => (
			<StatusBadge status={inspection?.isInspectionPassed ?? false} />
		),
	},
	{
		key: 'next-inspection-date',
		label: 'Date of next inspection',
		render: (inspection) =>
			parsedDateToString(inspection?.nextInspectionDate) || '—',
	},
]
