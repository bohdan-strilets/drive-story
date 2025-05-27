import { FC } from 'react'
import { generatePath, useNavigate } from 'react-router-dom'

import { routes } from '@/config/routes'

import { PhoneBookProps } from '@/types/props/PhoneBook/PhoneBookProps'

import { fadeSlide } from '@/animations/fadeSlide'

import ContactCard from './ContactCard'
import NoContactState from './NoContactState'
import { Item } from './PhoneBook.styled'

const PhoneBook: FC<PhoneBookProps> = ({ contacts }) => {
	const navigate = useNavigate()

	if (contacts.length === 0) return <NoContactState />

	return (
		<ul>
			{contacts.map((contact, index) => (
				<Item
					key={contact._id}
					{...fadeSlide(0, 20, 0, 0.3 * index)}
					onClick={() =>
						navigate(
							generatePath(routes.CONTACT_BY_ID, { contactId: contact._id })
						)
					}
				>
					<ContactCard
						name={contact.name}
						phone={contact.phone}
						specializations={contact.specializations}
						email={contact.email}
						website={contact.website}
					/>
				</Item>
			))}
		</ul>
	)
}

export default PhoneBook
