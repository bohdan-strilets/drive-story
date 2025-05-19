import { FC } from 'react'

import BigButton from '@/components/UI/BigButton'
import EmptyState from '@/components/UI/EmptyState'

import useModal from '@/hooks/ui/useModal'

import { modalNames } from '@/config/modalConfig'

const NoInspectionState: FC = () => {
	const { onOpen } = useModal()

	return (
		<>
			<BigButton
				onClick={() => onOpen(modalNames.ADD_INSPECTION)}
				label="Add technical inspection"
				height="140px"
				iconSize="80px"
				labelSize="20px"
				margin="0 0 30px 0"
			/>

			<EmptyState
				title="No information about technical inspection Yet"
				message="You have not yet added information about the technical inspection of your car. You can do this using the button above."
			/>
		</>
	)
}

export default NoInspectionState
