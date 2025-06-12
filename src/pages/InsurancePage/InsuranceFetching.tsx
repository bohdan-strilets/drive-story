import { FC } from 'react'
import { generatePath, useNavigate } from 'react-router-dom'

import ButtonGoBack from '@/components/UI/ButtonGoBack'
import ErrorMessage from '@/components/UI/ErrorMessage'
import Loader from '@/components/UI/Loader'

import { routes } from '@/config/routes'

import { InsuranceFetchingProps } from '@/types/props/Insurance/InsuranceFetchingProps'

const InsuranceFetching: FC<InsuranceFetchingProps> = ({
	carId,
	isError,
	insuranceId,
	isFetching,
}) => {
	const navigate = useNavigate()
	const path = generatePath(routes.CAR_BY_ID, { carId: carId! })

	if (!carId) {
		return (
			<>
				<ButtonGoBack
					label="car"
					onClick={() => navigate(path)}
					margin="0 0 5px 0"
					color="black"
				/>
				<ErrorMessage message="Car ID is missing from the URL" />
			</>
		)
	}

	if (isError) {
		return (
			<>
				<ButtonGoBack
					label="car"
					onClick={() => navigate(path)}
					margin="0 0 5px 0"
					color="black"
				/>
				<ErrorMessage
					message={`Insurance policy with ID: ${insuranceId} was not found`}
				/>
			</>
		)
	}

	if (isFetching) {
		return <Loader color="gray" />
	}

	return null
}

export default InsuranceFetching
