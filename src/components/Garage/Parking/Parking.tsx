import { FC } from 'react'

import Loader from '@/components/UI/Loader'

import { useGetAllCar } from '@/hooks/car/useGetAllCar'

import { PaginationDto } from '@/types/dto/PaginationDto'

import CarCard from '../CarCard'

import { Item, List } from './Parking.styled'

const Parking: FC = () => {
	const paginationDto: PaginationDto = { limit: 5, page: 1 }
	const { data: cars, isLoading } = useGetAllCar(paginationDto)

	if (isLoading) {
		return <Loader color="gray" />
	}

	return (
		<List>
			{cars?.map((car) => (
				<Item key={car._id}>
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
	)
}

export default Parking
