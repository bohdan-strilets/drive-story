import { CarEntity } from '@/types/types/CarEntity'
import { PaginationMeta } from '@/types/types/PaginationMeta'

export type GarageProps = {
	cars: CarEntity[]
	paginationMeta: PaginationMeta
	setPage: React.Dispatch<React.SetStateAction<number>>
}
