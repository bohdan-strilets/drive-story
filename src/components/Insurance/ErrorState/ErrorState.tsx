import { FC } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import ButtonGoBack from '@/components/UI/ButtonGoBack'
import ErrorMessage from '@/components/UI/ErrorMessage'

import { routes } from '@/config/routes'

const ErrorState: FC = () => {
	const navigate = useNavigate()
	const { insuranceId, carId } = useParams()

	return (
		<>
			<ButtonGoBack
				label="car"
				onClick={() => navigate(`${routes.CAR_INFORMATION}/${carId}`)}
				margin="0 0 5px 0"
				color="black"
			/>
			<ErrorMessage
				message={`Insurance policy with current ID: ${insuranceId} was not found.`}
			/>
		</>
	)
}

export default ErrorState
