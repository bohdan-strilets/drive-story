import { FC } from 'react'
import { generatePath, useNavigate, useParams } from 'react-router-dom'

import ButtonGoBack from '@/components/UI/ButtonGoBack'
import ErrorMessage from '@/components/UI/ErrorMessage'

import { routes } from '@/config/routes'

import { ErrorStateProps } from '@/types/props/Refueling/ErrorStateProps'

const ErrorState: FC<ErrorStateProps> = ({ carId }) => {
	const navigate = useNavigate()
	const { refuelingId } = useParams()

	const path = generatePath(routes.REFUELING_BY_CAR, {
		carId,
	})

	return (
		<>
			<ButtonGoBack
				label="garage"
				onClick={() => navigate(path)}
				margin="0 0 5px 0"
				color="black"
			/>
			<ErrorMessage
				message={`Refueling with current ID: ${refuelingId} was not found.`}
			/>
		</>
	)
}

export default ErrorState
