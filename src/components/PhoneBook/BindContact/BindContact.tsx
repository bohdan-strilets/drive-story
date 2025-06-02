import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import ButtonAsLink from '@/components/UI/ButtonAsLink'
import Loader from '@/components/UI/Loader'
import Pagination from '@/components/UI/Pagination'
import Paragraph from '@/components/UI/Paragraph'

import { useFilterContacts } from '@/hooks/contact/useFilterContacts'
import useServerPagination from '@/hooks/ui/useServerPagination'

import { routes } from '@/config/routes'

import { BindContactParams } from '@/types/params/BindContactParams'
import { PaginationParams } from '@/types/params/PaginationParams'
import { BindContactProps } from '@/types/props/PhoneBook/BindContactProps'

import ContactsFilter from '../ContactsFilter'

import { BindBtn, Button, Item, List } from './BindContact.styled'

const BindContact = <T,>({ isBinding, bindContact }: BindContactProps<T>) => {
	const [page, setPage] = useState(1)
	const [query, setQuery] = useState<string>('')
	const [selectedContact, setSelectedContact] = useState<null | string>(null)

	const navigate = useNavigate()
	const { carId, insuranceId } = useParams()

	const limit = 5
	const paginationParams: PaginationParams = { limit, page, searchQuery: query }

	const { data, isLoading: isFiltered } = useFilterContacts(paginationParams)
	const isLoading = isBinding || isFiltered

	const contacts = data?.data
	const paginationMeta = data?.meta

	const { currentPage, totalPages, nextPage, prevPage, goToPage } =
		useServerPagination({
			meta: paginationMeta,
			onPageChange: setPage,
		})

	const handleBindContact = async (contactId: string) => {
		const bindContactParams: BindContactParams = {
			carId,
			entityId: insuranceId,
			contactId,
		}

		bindContact(bindContactParams)
	}

	return (
		<>
			<Paragraph color="gray" margin="0 0 15px 0">
				You can link a phone book contact to any operation so that you can
				always easily reach out and never lose important contact information. If
				you can’t find the contact you need, create it in the{' '}
				<ButtonAsLink
					onClick={() => navigate(routes.PHONE_BOOK)}
					label="phone book"
					color="yellow"
					hoverColor="black"
				/>
			</Paragraph>

			<ContactsFilter getQuery={setQuery} />

			{isLoading && <Loader color="gray" />}

			{!isFiltered && (
				<>
					<List>
						{contacts?.map((contact) => (
							<Item key={contact._id}>
								<Button
									type="button"
									onClick={() => setSelectedContact(contact._id)}
								>
									<p>{contact.name}</p>
								</Button>
								{selectedContact === contact._id && (
									<BindBtn
										type="button"
										onClick={() => handleBindContact(contact._id)}
										disabled={isBinding}
									>
										{isBinding ? '...' : 'Bind'}
									</BindBtn>
								)}
							</Item>
						))}
					</List>

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
			)}

			{contacts?.length === 0 && (
				<Paragraph color="gray">No contacts</Paragraph>
			)}
		</>
	)
}

export default BindContact
