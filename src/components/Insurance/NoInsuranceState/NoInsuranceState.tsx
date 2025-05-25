import { FC } from 'react'
import { IoDocumentText } from 'react-icons/io5'

import ActionButton from '@/components/UI/ActionButton'
import EmptyState from '@/components/UI/EmptyState'

import useModal from '@/hooks/ui/useModal'

import { modalNames } from '@/config/modalConfig'

const NoInsuranceState: FC = () => {
	const { onOpen } = useModal()

	return (
		<>
			<ActionButton
				onClick={() => onOpen(modalNames.ADD_INSURANCE)}
				label="Add insurance"
				icon={<IoDocumentText />}
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
