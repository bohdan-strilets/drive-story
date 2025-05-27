import { FC } from 'react'

import EmptyState from '@/components/UI/EmptyState'

const NoCarState: FC = () => {
	return (
		<>
			<EmptyState
				title="Nothing added yet..."
				message="Looks like you haven't added anything yet.... Seems like it's high time to do it"
			/>
		</>
	)
}

export default NoCarState
