import { FC } from 'react'
import { useNavigate } from 'react-router-dom'

import ButtonGoBack from '@/components/UI/ButtonGoBack'
import ErrorMessage from '@/components/UI/ErrorMessage'
import Loader from '@/components/UI/Loader'

import { routes } from '@/config/routes'

import { CarFetchingProps } from '@/types/props/Garage/CarFetchingProps'

const CarFetching: FC<CarFetchingProps> = ({ isError, isFetching, carId }) => {
	const navigate = useNavigate()

	if (!carId)
		return (
			<>
				<ButtonGoBack
					label="car"
					onClick={() => navigate(routes.GARAGE)}
					margin="0 0 5px 0"
					color="black"
				/>
				<ErrorMessage message="Car ID is missing from the URL" />
			</>
		)

	if (isError)
		return (
			<>
				<ButtonGoBack
					label="garage"
					onClick={() => navigate(routes.GARAGE)}
					margin="0 0 5px 0"
					color="black"
				/>
				<ErrorMessage
					message={`Car with current ID: ${carId} was not found.`}
				/>
			</>
		)

	if (isFetching) return <Loader color="gray" />
	return null
}

export default CarFetching
