import { AnimatePresence } from 'motion/react'
import { FC } from 'react'

import ShowImageViewer from '@/components/Layout/ShowImageViewer'
import UploadPhotoModal from '@/components/Layout/UploadPhotoModal'

import { CarModalsProps } from '@/types/props/Garage/CarModalsProps'

import CarEditModal from './modals/CarEditModal'
import SelectCarModal from './modals/SelectCarModal'

const CarModals: FC<CarModalsProps> = ({
	car,
	carId,
	callback,
	isLoading,
	showViewer,
	currentImage,
	closeViewer,
	photos,
}) => {
	return (
		<AnimatePresence>
			<UploadPhotoModal callback={callback} isLoading={isLoading} key={1} />

			<ShowImageViewer
				showViewer={showViewer}
				currentImage={currentImage}
				closeViewer={closeViewer}
				photos={photos}
				key={2}
			/>

			<CarEditModal car={car} key={3} />

			<SelectCarModal carId={carId} key={4} />
		</AnimatePresence>
	)
}

export default CarModals
