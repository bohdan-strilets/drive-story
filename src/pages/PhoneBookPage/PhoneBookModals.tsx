import { AnimatePresence } from 'motion/react'
import { FC } from 'react'

import AddContactModal from './modals/AddContactModal'

const PhoneBookModals: FC = () => {
	return (
		<AnimatePresence>
			<AddContactModal />
		</AnimatePresence>
	)
}

export default PhoneBookModals
