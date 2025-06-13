import { GarageProps } from './GarageProps'

export type GarageMainViewProps = Pick<
	GarageProps,
	'cars' | 'paginationMeta' | 'setPage'
>
