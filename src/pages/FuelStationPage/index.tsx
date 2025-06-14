import { FC, useState } from 'react'
import { BsFillFuelPumpFill } from 'react-icons/bs'
import { useParams } from 'react-router-dom'

import Refueling from '@/components/FuelStation'
import ActionButton from '@/components/UI/ActionButton'

import { useFetchFuelings } from '@/hooks/fueling/useFetchFuelings'
import useModal from '@/hooks/ui/useModal'

import { modalNames } from '@/config/modalConfig'

import { ListParams } from '@/types/params/ListParams'

import FuelStationFetching from './FuelStationFetching'
import FuelStationModals from './FuelStationModals'

const FuelStationPage: FC = () => {
	const [page, setPage] = useState(1)

	const { onOpen } = useModal()
	const { carId } = useParams()

	const limit = 10
	const paginationParams: ListParams = {
		pagination: { limit, page },
		carId: carId!,
	}

	const { isLoading, data: fuelings } = useFetchFuelings(paginationParams)
	const paginationMeta = fuelings?.meta

	if (!carId || isLoading) {
		return <FuelStationFetching carId={carId} isFetching={isLoading} />
	}

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

			{fuelings && (
				<Refueling
					refuelings={fuelings.data}
					setPage={setPage}
					paginationMeta={paginationMeta}
				/>
			)}

			<FuelStationModals carId={carId} />
		</>
	)
}

export default FuelStationPage
