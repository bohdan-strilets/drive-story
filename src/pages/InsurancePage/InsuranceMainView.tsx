import { FC } from 'react'
import { IoDocumentText } from 'react-icons/io5'

import InsuranceInfo from '@/components/Insurance/InsuranceInfo'
import ActionButton from '@/components/UI/ActionButton'
import EmptyState from '@/components/UI/EmptyState'

import useModal from '@/hooks/ui/useModal'

import insuranceCar from '@/assets/insurance/insurance-car.webp'

import { modalNames } from '@/config/modalConfig'

import { InsuranceMainViewProps } from '@/types/props/Insurance/InsuranceMainViewProps'

const InsuranceMainView: FC<InsuranceMainViewProps> = ({
	insurance,
	overlayActions,
	isProcessing,
	isBinding,
	bindContact,
}) => {
	const { onOpen } = useModal()

	return (
		<>
			{!insurance && (
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
						message="You have not created an insurance policy for this vehicle yet."
						imageUrl={insuranceCar}
					/>
				</>
			)}

			{insurance && (
				<InsuranceInfo
					insurance={insurance}
					overlayActions={overlayActions}
					isProcessing={isProcessing}
					isBinding={isBinding}
					bindContact={bindContact}
				/>
			)}
		</>
	)
}

export default InsuranceMainView
