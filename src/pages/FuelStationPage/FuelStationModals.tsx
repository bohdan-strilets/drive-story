import { AnimatePresence } from 'motion/react'
import { FC } from 'react'

import { FuelStationModalsProps } from '@/types/props/Refueling/FuelStationModalsProps'

import AddRefuelingModal from './modals/AddRefuelingModal'

const FuelStationModals: FC<FuelStationModalsProps> = ({ carId }) => {
	return (
		<AnimatePresence>
			<AddRefuelingModal carId={carId} />
		</AnimatePresence>
	)
}

export default FuelStationModals
