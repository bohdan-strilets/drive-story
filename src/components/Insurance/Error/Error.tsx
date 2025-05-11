import { FC } from 'react'
import { RiFunctionAddFill } from 'react-icons/ri'

import BigButton from '@/components/UI/BigButton'
import ErrorMessage from '@/components/UI/ErrorMessage'

import useModal from '@/hooks/ui/useModal'

const Error: FC = () => {
	const { onOpen, modalNames } = useModal()

	return (
		<>
			<BigButton
				onClick={() => onOpen(modalNames.ADD_INSURANCE_POLICY)}
				icon={<RiFunctionAddFill />}
				label="Add insurance policy"
				height="140px"
				iconSize="80px"
				labelSize="20px"
				margin="0 0 30px 0"
			/>
			<ErrorMessage
				message={
					'You have not yet added insurance policy information for this vehicle. Please use the button above.'
				}
			/>
		</>
	)
}

export default Error
