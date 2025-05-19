import { FC } from 'react'

import BigButton from '@/components/UI/BigButton'
import EmptyState from '@/components/UI/EmptyState'

import useModal from '@/hooks/ui/useModal'

import { modalNames } from '@/config/modalConfig'

const NoInsuranceState: FC = () => {
	const { onOpen } = useModal()

	return (
		<>
			<BigButton
				onClick={() => onOpen(modalNames.ADD_INSURANCE)}
				label="Add insurance"
				height="140px"
				iconSize="80px"
				labelSize="20px"
				margin="0 0 30px 0"
			/>

			<EmptyState
				title="No Insurance Policy Yet"
				message="You have not created an insurance policy for this vehicle yet. If you’d like to create one, please click the “Add Insurance” button above."
			/>
		</>
	)
}

export default NoInsuranceState
