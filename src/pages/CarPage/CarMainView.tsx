import { FC } from 'react'

import CarInformation from '@/components/Garage/CarInformation'

import { CarMainViewProps } from '@/types/props/Garage/CarMainViewProps'

const CarMainView: FC<CarMainViewProps> = ({
	car,
	trims,
	isProcessing,
	overlayActions,
}) => {
	return (
		car && (
			<CarInformation
				car={car}
				trims={trims}
				isProcessing={isProcessing}
				overlayActions={overlayActions}
			/>
		)
	)
}

export default CarMainView
