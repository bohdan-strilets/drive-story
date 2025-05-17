import { AnimatePresence } from 'motion/react'
import { FC } from 'react'

import CarForm from '@/components/Garage/CarForm'
import Parking from '@/components/Garage/Parking'
import Modal from '@/components/Modal'
import BigButton from '@/components/UI/BigButton'

import useModal from '@/hooks/ui/useModal'

import { modalNames } from '@/config/modalConfig'

const GaragePage: FC = () => {
	const { checkQueryParam, onOpen } = useModal()

	return (
		<>
			<BigButton
				onClick={() => onOpen(modalNames.ADD_CAR)}
				label="Add new car"
				height="140px"
				iconSize="80px"
				labelSize="20px"
				margin="0 0 30px 0"
			/>

			<Parking />

			<AnimatePresence>
				{checkQueryParam(modalNames.ADD_CAR) && (
					<Modal key={modalNames.ADD_CAR} title="Add new car">
						<CarForm mode="create" />
					</Modal>
				)}
			</AnimatePresence>
		</>
	)
}

export default GaragePage
