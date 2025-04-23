import { AnimatePresence } from 'motion/react'
import { FC } from 'react'

import Garage from '@/components/Garage'
import AddCar from '@/components/Garage/AddCar'
import Modal from '@/components/Modal'

import useModal from '@/hooks/ui/useModal'

const GaragePage: FC = () => {
	const { checkQueryParam, modalNames } = useModal()

	return (
		<>
			<Garage />

			<AnimatePresence>
				{checkQueryParam(modalNames.ADD_CAR) && (
					<Modal key={modalNames.ADD_CAR} title="Add new car">
						<AddCar />
					</Modal>
				)}
			</AnimatePresence>
		</>
	)
}

export default GaragePage
