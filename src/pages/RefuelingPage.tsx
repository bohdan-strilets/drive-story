import { AnimatePresence } from 'motion/react'
import { FC, useState } from 'react'
import { BsFillFuelPumpFill } from 'react-icons/bs'
import { useParams } from 'react-router-dom'

import Modal from '@/components/Modal'
import Refueling from '@/components/Refueling'
import RefuelingForm from '@/components/Refueling/RefuelingForm'
import ActionButton from '@/components/UI/ActionButton'
import Loader from '@/components/UI/Loader'

import { useFetchFuelings } from '@/hooks/fueling/useFetchFuelings'
import useModal from '@/hooks/ui/useModal'

import { modalNames } from '@/config/modalConfig'

import { ListParams } from '@/types/params/ListParams'

const RefuelingPage: FC = () => {
	const [page, setPage] = useState(1)

	const { onOpen, checkQueryParam } = useModal()
	const { carId } = useParams()

	const limit = 10
	const paginationParams: ListParams = {
		pagination: { limit, page },
		carId: carId!,
	}

	const { isLoading, data: fuelings } = useFetchFuelings(paginationParams)
	const paginationMeta = fuelings?.meta

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

			{isLoading && <Loader color="gray" />}

			{fuelings && (
				<Refueling
					refuelings={fuelings.data}
					setPage={setPage}
					paginationMeta={paginationMeta}
				/>
			)}

			<AnimatePresence>
				{checkQueryParam(modalNames.ADD_REFUELING) && (
					<Modal key={modalNames.ADD_REFUELING} title="Add new refueling">
						<RefuelingForm mode="create" carId={carId!} />
					</Modal>
				)}
			</AnimatePresence>
		</>
	)
}

export default RefuelingPage
