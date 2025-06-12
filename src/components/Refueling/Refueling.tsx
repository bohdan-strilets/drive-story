import { FC } from 'react'
import { generatePath, useNavigate } from 'react-router-dom'

import useServerPagination from '@/hooks/ui/useServerPagination'

import { routes } from '@/config/routes'

import { RefuelingProps } from '@/types/props/Refueling/RefuelingProps'

import { fadeSlide } from '@/animations/fadeSlide'

import Pagination from '../UI/Pagination'

import EmptyState from './EmptyState'
import { Item } from './Refueling.styled'
import RefuelingCard from './RefuelingCard'

const Refueling: FC<RefuelingProps> = ({
	refuelings,
	paginationMeta,
	setPage,
}) => {
	const navigate = useNavigate()

	const { currentPage, totalPages, nextPage, prevPage, goToPage } =
		useServerPagination({
			meta: paginationMeta,
			onPageChange: setPage,
		})

	if (refuelings.length === 0) return <EmptyState />

	return (
		<>
			<ul>
				{refuelings.map((refueling, index) => {
					const path = generatePath(routes.REFUELING_BY_ID, {
						carId: refueling.carId,
						refuelingId: refueling._id,
					})

					return (
						<Item
							key={refueling._id}
							{...fadeSlide(0, -30, index * 0.1, 0.2, 'easeOut', false)}
							onClick={() => navigate(path)}
						>
							<RefuelingCard
								quantity={refueling.quantity}
								pricePerUnit={refueling.pricePerUnit}
								totalCost={refueling.totalCost}
								fuelType={refueling.fuelType}
								fuelingDate={refueling.fuelingDate}
							/>
						</Item>
					)
				})}
			</ul>

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
