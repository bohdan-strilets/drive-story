import { FC } from 'react'

import useServerPagination from '@/hooks/ui/useServerPagination'

import { RefuelingProps } from '@/types/props/Refueling/RefuelingProps'

import { fadeSlide } from '@/animations/fadeSlide'

import Pagination from '../UI/Pagination'

import EmptyState from './EmptyState'
import { Item, List } from './Refueling.styled'
import RefuelingCard from './RefuelingCard'

const Refueling: FC<RefuelingProps> = ({
	refuelings,
	paginationMeta,
	setPage,
}) => {
	const { currentPage, totalPages, nextPage, prevPage, goToPage } =
		useServerPagination({
			meta: paginationMeta,
			onPageChange: setPage,
		})

	if (refuelings.length === 0) return <EmptyState />

	return (
		<>
			<List>
				{refuelings.map((refueling, index) => (
					<Item
						key={refueling._id}
						{...fadeSlide(0, -30, index * 0.1, 0.2, 'easeOut', false)}
					>
						<RefuelingCard
							quantity={refueling.quantity}
							pricePerUnit={refueling.pricePerUnit}
							totalCost={refueling.totalCost}
							fuelType={refueling.fuelType}
							fuelingDate={refueling.fuelingDate}
						/>
					</Item>
				))}
			</List>

			{totalPages > 1 && (
				<Pagination
					goToPage={goToPage}
					nextPage={nextPage}
					prevPage={prevPage}
					currentPage={currentPage}
					totalPages={totalPages}
				/>
			)}
		</>
	)
}

export default Refueling
