import { FC } from 'react'

import Garage from '@/components/Garage'
import EmptyState from '@/components/UI/EmptyState'

import garageWebp from '@/assets/garage/garage.webp'

import { GarageMainViewProps } from '@/types/props/Garage/GarageMainViewProps'

const GarageMainView: FC<GarageMainViewProps> = ({
	cars,
	paginationMeta,
	setPage,
}) => {
	if (cars.length === 0) {
		return (
			<>
				<EmptyState
					title="Nothing added yet..."
					message="Looks like you haven't added anything yet.... Seems like it's high time to do it"
					imageUrl={garageWebp}
				/>
			</>
		)
	}

	return (
		<Garage cars={cars} paginationMeta={paginationMeta} setPage={setPage} />
	)
}

export default GarageMainView
