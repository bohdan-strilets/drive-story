import { FC } from 'react'

import EmptyState from '@/components/UI/EmptyState'

import garageWebp from '@/assets/garage/garage.webp'

const NoCarState: FC = () => {
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

export default NoCarState
