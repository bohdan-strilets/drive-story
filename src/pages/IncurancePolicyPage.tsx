import { AnimatePresence } from 'motion/react'
import { FC } from 'react'
import { RiFunctionAddFill } from 'react-icons/ri'

import AddInsurancePolicy from '@/components/InsurancePolicy/AddInsurancePolicy'
import Modal from '@/components/Modal'
import BigButton from '@/components/UI/BigButton'

import useModal from '@/hooks/ui/useModal'

const IncurancePolicyPage: FC = () => {
	const { onOpen, modalNames, checkQueryParam } = useModal()

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

			<AnimatePresence>
				{checkQueryParam(modalNames.ADD_INSURANCE_POLICY) && (
					<Modal
						key={modalNames.ADD_INSURANCE_POLICY}
						title="Add insurance policy"
					>
						<AddInsurancePolicy />
					</Modal>
				)}
			</AnimatePresence>
		</>
	)
}

export default IncurancePolicyPage
