import { FC } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import ButtonGoBack from '@/components/UI/ButtonGoBack'
import ErrorMessage from '@/components/UI/ErrorMessage'

import { routes } from '@/config/routes'

const ErrorState: FC = () => {
	const navigate = useNavigate()
	const { inspectionId, carId } = useParams()

	return (
		<>
			<ButtonGoBack
				label="car"
				onClick={() => navigate(`${routes.CAR_INFORMATION}/${carId}`)}
				margin="0 0 5px 0"
				color="black"
			/>
			<ErrorMessage
				message={`Technical inspection with current ID: ${inspectionId} was not found.`}
			/>
		</>
	)
}

export default ErrorState
