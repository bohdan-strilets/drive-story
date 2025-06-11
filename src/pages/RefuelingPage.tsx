import { FC } from 'react'
import { BsFillFuelPumpFill } from 'react-icons/bs'

import Refueling from '@/components/Refueling'
import ActionButton from '@/components/UI/ActionButton'

import useModal from '@/hooks/ui/useModal'

import { modalNames } from '@/config/modalConfig'

const RefuelingPage: FC = () => {
	const { onOpen } = useModal()

	return (
		<>
			<ActionButton
				onClick={() => onOpen(modalNames.ADD_REFUELING)}
				label="Add refueling"
				icon={<BsFillFuelPumpFill />}
				height="140px"
				iconSize="80px"
				labelSize="20px"
				margin="0 0 30px 0"
			/>

			<Refueling />
		</>
	)
}

export default RefuelingPage
