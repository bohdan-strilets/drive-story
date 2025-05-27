import { FC } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import ButtonGoBack from '@/components/UI/ButtonGoBack'
import ErrorMessage from '@/components/UI/ErrorMessage'

import { routes } from '@/config/routes'

const ErrorState: FC = () => {
	const navigate = useNavigate()
	const { contactId } = useParams()

	return (
		<>
			<ButtonGoBack
				label="garage"
				onClick={() => navigate(routes.PHONE_BOOK)}
				margin="0 0 5px 0"
				color="black"
			/>
			<ErrorMessage
				message={`Contact with current ID: ${contactId} was not found.`}
			/>
		</>
	)
}

export default ErrorState
