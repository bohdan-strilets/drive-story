import { FC } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import ButtonGoBack from '@/components/UI/ButtonGoBack'
import ErrorMessage from '@/components/UI/ErrorMessage'

import { routes } from '@/config/routes'

const ErrorState: FC = () => {
	const { carId } = useParams()
	const navigate = useNavigate()

	return (
		<>
			<ButtonGoBack
				label="garage"
				onClick={() => navigate(`${routes.GARAGE}`)}
				margin="0 0 5px 0"
				color="black"
			/>
			<ErrorMessage message={`Car with current ID: ${carId} was not found.`} />
		</>
	)
}

export default ErrorState
