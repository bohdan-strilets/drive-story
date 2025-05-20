import { FC } from 'react'
import { generatePath, useNavigate, useParams } from 'react-router-dom'

import ButtonGoBack from '@/components/UI/ButtonGoBack'
import ErrorMessage from '@/components/UI/ErrorMessage'

import { routes } from '@/config/routes'

const ErrorState: FC = () => {
	const { carId, inspectionId } = useParams()

	const navigate = useNavigate()
	const path = generatePath(routes.CAR_BY_ID, { carId: carId || null })

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
		</>
	)
}

export default ErrorState
