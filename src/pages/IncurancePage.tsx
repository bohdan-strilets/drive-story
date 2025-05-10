import { AnimatePresence } from 'motion/react'
import { FC } from 'react'

import AddInsurance from '@/components/Insurance/AddInsurance'
import Insurance from '@/components/Insurance/Insurance'
import Modal from '@/components/Modal'

import useModal from '@/hooks/ui/useModal'

const IncurancePolicyPage: FC = () => {
	const { modalNames, checkQueryParam } = useModal()

	return (
		<>
			<Insurance />

			<AnimatePresence>
				{checkQueryParam(modalNames.ADD_INSURANCE_POLICY) && (
					<Modal
						key={modalNames.ADD_INSURANCE_POLICY}
						title="Add insurance policy"
					>
						<AddInsurance />
					</Modal>
				)}
			</AnimatePresence>
		</>
	)
}

export default IncurancePolicyPage
