import { FC, useState } from 'react'
import { BiSolidContact } from 'react-icons/bi'
import { useParams } from 'react-router-dom'

import PhoneBook from '@/components/PhoneBook'
import ContactsFilter from '@/components/PhoneBook/ContactsFilter'
import ActionButton from '@/components/UI/ActionButton'

import { useFilterContacts } from '@/hooks/contact/useFilterContacts'
import useModal from '@/hooks/ui/useModal'

import { modalNames } from '@/config/modalConfig'

import { PaginationParams } from '@/types/params/PaginationParams'

import PhoneBookFetching from './PhoneBookFetching'
import PhoneBookModals from './PhoneBookModals'

const PhoneBookPage: FC = () => {
	const [page, setPage] = useState(1)
	const [query, setQuery] = useState<string>('')

	const { carId } = useParams()
	const { onOpen } = useModal()

	const limit = 10
	const paginationParams: PaginationParams = { limit, page, searchQuery: query }

	const { isLoading, data } = useFilterContacts(paginationParams)

	const contacts = data?.data ?? []
	const paginationMeta = data?.meta

	if (isLoading || !carId) {
		return <PhoneBookFetching isFetching={isLoading} carId={carId} />
	}

	return (
		<>
			<ActionButton
				onClick={() => onOpen(modalNames.ADD_CONTACT)}
				label="Add new contact"
				icon={<BiSolidContact />}
				height="140px"
				iconSize="80px"
				labelSize="20px"
				margin="0 0 10px 0"
			/>

			{contacts.length > 0 && <ContactsFilter getQuery={setQuery} />}

			{!isLoading && (
				<PhoneBook
					contacts={contacts}
					paginationMeta={paginationMeta}
					setPage={setPage}
				/>
			)}

			<PhoneBookModals />
		</>
	)
}

export default PhoneBookPage
