import { AnimatePresence } from 'motion/react'
import { FC, useState } from 'react'
import { BiSolidContact } from 'react-icons/bi'

import Modal from '@/components/Modal'
import PhoneBook from '@/components/PhoneBook'
import ContactForm from '@/components/PhoneBook/ContactForm'
import ActionButton from '@/components/UI/ActionButton'
import Loader from '@/components/UI/Loader'

import { useFetchContacts } from '@/hooks/contact/useFetchContacts'
import useModal from '@/hooks/ui/useModal'

import { modalNames } from '@/config/modalConfig'

import { PaginationParams } from '@/types/params/PaginationParams'

const PhoneBookPage: FC = () => {
	const [page, setPage] = useState(1)

	const { onOpen, checkQueryParam } = useModal()

	const limit = 10
	const paginationParams: PaginationParams = { limit, page }

	const { isLoading, data } = useFetchContacts(paginationParams)
	const contacts = data?.data ?? []

	const paginationMeta = data?.meta ?? {
		totalItems: 0,
		itemsPerPage: limit,
		itemCount: 0,
		totalPages: 1,
		currentPage: page,
	}

	if (isLoading) return <Loader color="gray" />

	return (
		<>
			<ActionButton
				onClick={() => onOpen(modalNames.ADD_CONTACT)}
				label="Add new contact"
				icon={<BiSolidContact />}
				height="140px"
				iconSize="80px"
				labelSize="20px"
				margin="0 0 30px 0"
			/>

			<PhoneBook
				contacts={contacts}
				paginationMeta={paginationMeta}
				setPage={setPage}
			/>

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
