import { FC } from 'react'
import { useParams } from 'react-router-dom'

import ContactInfo from '@/components/PhoneBook/ContactInfo'
import ErrorState from '@/components/PhoneBook/ErrorState'
import Loader from '@/components/UI/Loader'

import { useFetchContact } from '@/hooks/contact/useFetchContact'

const ContactInfoPage: FC = () => {
	const { contactId } = useParams()

	const { data: contact, isLoading, isError } = useFetchContact(contactId)

	if (isLoading) return <Loader color="gray" />
	if (isError) return <ErrorState />

	return <>{contact && <ContactInfo contact={contact} />}</>
}

export default ContactInfoPage
