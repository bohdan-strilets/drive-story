import { AnimatePresence } from 'motion/react'
import { FC } from 'react'

import AddCarModal from './modals/AddCarModal'

const GarageModals: FC = () => {
	return (
		<AnimatePresence>
			<AddCarModal />
		</AnimatePresence>
	)
}

export default GarageModals
