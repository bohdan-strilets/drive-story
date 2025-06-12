import { FC } from 'react'
import { useNavigate } from 'react-router-dom'

import ButtonGoBack from '@/components/UI/ButtonGoBack'
import ErrorMessage from '@/components/UI/ErrorMessage'
import Loader from '@/components/UI/Loader'

import { routes } from '@/config/routes'

import { ContactFetchingProps } from '@/types/props/PhoneBook/ContactFetchingProps'

const ContactFetching: FC<ContactFetchingProps> = ({
	isError,
	isFetching,
	contactId,
}) => {
	const navigate = useNavigate()

	if (!contactId) {
		return (
			<>
				<ButtonGoBack
					label="phone book"
					onClick={() => navigate(routes.PHONE_BOOK)}
					margin="0 0 5px 0"
					color="black"
				/>
				<ErrorMessage message="Contact ID is missing from the URL" />
			</>
		)
	}

	if (isError)
		return (
			<>
				<>
					<ButtonGoBack
						label="phone book"
						onClick={() => navigate(routes.PHONE_BOOK)}
						margin="0 0 5px 0"
						color="black"
					/>
					<ErrorMessage
						message={`Contact with current ID: ${contactId} was not found.`}
					/>
				</>
			</>
		)

	if (isFetching) return <Loader color="gray" />

	return null
}

export default ContactFetching
