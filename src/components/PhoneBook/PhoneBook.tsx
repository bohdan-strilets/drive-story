import { FC } from 'react'
import { generatePath, useNavigate } from 'react-router-dom'

import useServerPagination from '@/hooks/ui/useServerPagination'

import { routes } from '@/config/routes'

import { PhoneBookProps } from '@/types/props/PhoneBook/PhoneBookProps'

import { fadeSlide } from '@/animations/fadeSlide'

import Pagination from '../UI/Pagination'

import ContactCard from './ContactCard'
import NoContactState from './NoContactState'
import { Item } from './PhoneBook.styled'

const PhoneBook: FC<PhoneBookProps> = ({
	contacts,
	paginationMeta,
	setPage,
}) => {
	const navigate = useNavigate()

	const { currentPage, totalPages, nextPage, prevPage, goToPage } =
		useServerPagination({
			meta: paginationMeta,
			onPageChange: setPage,
		})

	if (contacts.length === 0) return <NoContactState />

	return (
		<>
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
							photos={contact.photos}
						/>
					</Item>
				))}
			</ul>

			{totalPages > 1 && (
				<Pagination
					goToPage={goToPage}
					nextPage={nextPage}
					prevPage={prevPage}
					currentPage={currentPage}
					totalPages={totalPages}
				/>
			)}
		</>
	)
}

export default PhoneBook
