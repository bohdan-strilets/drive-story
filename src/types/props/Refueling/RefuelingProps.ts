import { Fueling } from '@/types/types/Fueling'
import { PaginationMeta } from '@/types/types/PaginationMeta'

export type RefuelingProps = {
	refuelings: Fueling[]
	paginationMeta?: PaginationMeta
	setPage: React.Dispatch<React.SetStateAction<number>>
}
