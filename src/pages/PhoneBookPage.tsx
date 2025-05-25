import { FC } from 'react'
import { BiSolidContact } from 'react-icons/bi'

import PhoneBook from '@/components/PhoneBook'
import ActionButton from '@/components/UI/ActionButton'

import useModal from '@/hooks/ui/useModal'

import { modalNames } from '@/config/modalConfig'

const PhoneBookPage: FC = () => {
	const { onOpen } = useModal()

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

			<PhoneBook />
		</>
	)
}

export default PhoneBookPage
