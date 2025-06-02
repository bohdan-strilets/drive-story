import { FC } from 'react'

import Pagination from '@/components/UI/Pagination'

import useServerPagination from '@/hooks/ui/useServerPagination'

import { useUserStore } from '@/store/useUserStore'

import { GarageProps } from '@/types/props/Garage/GarageProps'

import { fadeSlide } from '@/animations/fadeSlide'

import CarCard from './CarCard'
import { Item, List } from './Garage.styled'
import NoCarState from './NoCarState'

const Garage: FC<GarageProps> = ({ cars, paginationMeta, setPage }) => {
	const user = useUserStore((state) => state.user)

	const { currentPage, totalPages, nextPage, prevPage, goToPage } =
		useServerPagination({
			meta: paginationMeta,
			onPageChange: setPage,
		})

	if (cars.length === 0) return <NoCarState />

	return (
		<>
			<List>
				{cars.map((car, index) => (
					<Item
						key={car._id}
						{...fadeSlide(0, -30, index * 0.1, 0.2, 'easeOut', false)}
					>
						<CarCard
							id={car._id}
							photos={car.photos}
							make={car.basicInfo.make}
							model={car.basicInfo.model}
							year={car.basicInfo.year}
							bodyType={car.specifications.bodyType}
							mileage={car.specifications.mileage}
							engineVolume={car.specifications.engine.volume}
							fuelType={car.specifications.fuelType}
							trnasmission={car.specifications.transmission}
							isCurrentCar={user?.currentCar === car._id}
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

export default Garage
