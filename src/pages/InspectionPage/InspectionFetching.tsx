import { FC } from 'react'
import { generatePath, useNavigate } from 'react-router-dom'

import ButtonGoBack from '@/components/UI/ButtonGoBack'
import ErrorMessage from '@/components/UI/ErrorMessage'
import Loader from '@/components/UI/Loader'

import { routes } from '@/config/routes'

import { InspectionFetchingProps } from '@/types/props/Inspection/InspectionFetchingProps'

const InspectionFetching: FC<InspectionFetchingProps> = ({
	carId,
	isError,
	isFetching,
	inspectionId,
}) => {
	const navigate = useNavigate()
	const path = generatePath(routes.CAR_BY_ID, { carId: carId ?? '' })

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
					message={`Technical inspection with ID: ${inspectionId} was not found.`}
				/>
				Z
			</>
		)
	}

	if (isFetching) {
		return <Loader color="gray" />
	}

	return null
}

export default InspectionFetching
