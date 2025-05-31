import { AnimatePresence } from 'motion/react'
import { FC, useCallback, useState } from 'react'
import { BiSolidContact } from 'react-icons/bi'

import Modal from '@/components/Modal'
import PhoneBook from '@/components/PhoneBook'
import ContactForm from '@/components/PhoneBook/ContactForm'
import ContactsFilter from '@/components/PhoneBook/ContactsFilter'
import ActionButton from '@/components/UI/ActionButton'
import Loader from '@/components/UI/Loader'

import { useFilterContacts } from '@/hooks/contact/useFilterContacts'
import useModal from '@/hooks/ui/useModal'

import { modalNames } from '@/config/modalConfig'

import { PaginationParams } from '@/types/params/PaginationParams'

const PhoneBookPage: FC = () => {
	const [page, setPage] = useState(1)
	const [query, setQuery] = useState<string>('')

	const { onOpen, checkQueryParam } = useModal()

	const getQuery = useCallback((query: string) => {
		setQuery(query)
	}, [])

	const limit = 10
	const paginationParams: PaginationParams = { limit, page, searchQuery: query }

	const { isLoading, data } = useFilterContacts(paginationParams)
	const contacts = data?.data ?? []

	const paginationMeta = data?.meta ?? {
		totalItems: 0,
		itemsPerPage: limit,
		itemCount: 0,
		totalPages: 1,
		currentPage: page,
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

			{data?.meta.totalItems !== 0 && <ContactsFilter getQuery={getQuery} />}

			{isLoading ? (
				<Loader color="gray" />
			) : (
				<PhoneBook
					contacts={contacts}
					paginationMeta={paginationMeta}
					setPage={setPage}
				/>
			)}

			<AnimatePresence>
				{checkQueryParam(modalNames.ADD_CONTACT) && (
					<Modal key={modalNames.ADD_CONTACT} title="Add new contact">
						<ContactForm mode="create" />
					</Modal>
				)}
			</AnimatePresence>
		</>
	)
}

export default PhoneBookPage
