import { FC, useState } from 'react'

import Loader from '@/components/UI/Loader'
import Pagination from '@/components/UI/Pagination'

import { useGetAllCar } from '@/hooks/car/useGetAllCar'
import useResponsive from '@/hooks/ui/useResponsive'
import useServerPagination from '@/hooks/ui/useServerPagination'

import { PaginationDto } from '@/types/dto/PaginationDto'

import { fadeSlide } from '@/animations/fadeSlide'

import CarCard from '../CarCard'

import { Item, List } from './Parking.styled'

const Parking: FC = () => {
	const { maxTablet } = useResponsive()

	const [page, setPage] = useState(1)
	const limit = maxTablet ? 6 : 9

	const paginationDto: PaginationDto = { limit, page }

	const { isLoading, data } = useGetAllCar(paginationDto)
	const cars = data?.data ?? []
	const paginationMeta = data?.meta ?? {
		totalItems: 0,
		itemsPerPage: limit,
		itemCount: 0,
		totalPages: 1,
		currentPage: page,
	}

	const { currentPage, totalPages, nextPage, prevPage, goToPage } =
		useServerPagination({
			meta: paginationMeta,
			onPageChange: setPage,
		})

	if (isLoading) {
		return <Loader color="gray" />
	}

	return (
		<>
			<List>
				{cars?.map((car, index) => (
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

export default Parking
