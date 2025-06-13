import { FC } from 'react'
import { useParams } from 'react-router-dom'

import { useFetchCar } from '@/hooks/car/useFetchCar'
import { useFetchTrimsById } from '@/hooks/carQuery/useFetchTrimsById'
import { useGalleryManager } from '@/hooks/ui/useGalleryManager'
import { useViewerManager } from '@/hooks/ui/useViewerManager'

import { getImageResources } from '@/utils/getImageResources'

import { EntityType } from '@/types/enums/EntityType'

import CarFetching from './CarFetching'
import CarMainView from './CarMainView'
import CarModals from './CarModals'

const CarInfoPage: FC = () => {
	const { carId } = useParams()

	const { data: car, isLoading, isError } = useFetchCar(carId)

	const { data: carTrims } = useFetchTrimsById({
		make: car?.basicInfo.make,
		model: car?.basicInfo.model,
		year: car?.basicInfo.year,
		trimsId: car?.basicInfo.trimsId,
	})

	const { closeViewer, currentImage, showViewer, openViewer } =
		useViewerManager()

	const {
		actions,
		isLoading: isProcessing,
		upload,
	} = useGalleryManager({
		entityType: EntityType.CARS,
		entityId: carId,
		openViewer,
	})

	const photos = getImageResources(car?.photos)

	if (isLoading || isError || !carId) {
		return (
			<CarFetching isError={isError} isFetching={isLoading} carId={carId} />
		)
	}

	return (
		<>
			<CarMainView
				car={car}
				trims={carTrims?.data}
				isProcessing={isProcessing}
				overlayActions={actions}
			/>

			<CarModals
				car={car}
				carId={carId}
				callback={upload}
				isLoading={isProcessing}
				closeViewer={closeViewer}
				currentImage={currentImage}
				photos={photos}
				showViewer={showViewer}
			/>
		</>
	)
}

export default CarInfoPage
