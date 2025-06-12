import { FC } from 'react'

import ContactInfo from '@/components/PhoneBook/ContactInfo'
import EmptyState from '@/components/UI/EmptyState'

import phoneBookWebp from '@/assets/phoneBook/phone-book.webp'

import { ContactMainViewProps } from '@/types/props/PhoneBook/ContactMainViewProps'

const ContactMainView: FC<ContactMainViewProps> = ({
	contact,
	overlayActions,
	isProcessing,
}) => {
	return (
		<>
			{!contact && (
				<EmptyState
					title="Nothing added yet..."
					message="Looks like you haven't added anything yet.... Seems like it's high time to do it"
					imageUrl={phoneBookWebp}
				/>
			)}

			{contact && (
				<ContactInfo
					contact={contact}
					overlayActions={overlayActions}
					isProcessing={isProcessing}
				/>
			)}
		</>
	)
}

export default ContactMainView
