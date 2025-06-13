import { ShowImageViewerProps } from '../Layout/ShowImageViewerProps'
import { UploaderProps } from '../Uploader/UploaderProps'

import { CarFormProps } from './CarFormProps'

export type CarModalsProps = { carId: string } & Pick<CarFormProps, 'car'> &
	Pick<UploaderProps, 'callback' | 'isLoading'> &
	Pick<
		ShowImageViewerProps,
		'closeViewer' | 'currentImage' | 'photos' | 'showViewer'
	>
