import { FC, useState } from 'react'
import { IoCarSportSharp } from 'react-icons/io5'

import ActionButton from '@/components/UI/ActionButton'

import { useFetchCars } from '@/hooks/car/useFetchCars'
import useModal from '@/hooks/ui/useModal'
import useResponsive from '@/hooks/ui/useResponsive'

import { modalNames } from '@/config/modalConfig'

import { PaginationParams } from '@/types/params/PaginationParams'

import GarageFetcing from './GarageFetcing'
import GarageMainView from './GarageMainView'
import GarageModals from './GarageModals'

const GaragePage: FC = () => {
	const [page, setPage] = useState(1)

	const { onOpen } = useModal()
	const { maxTablet } = useResponsive()

	const limit = maxTablet ? 6 : 9
	const paginationParams: PaginationParams = { limit, page }

	const { isLoading, data, isError } = useFetchCars(paginationParams)

	const cars = data?.data ?? []
	const paginationMeta = data?.meta

	if (isLoading || isError) {
		return <GarageFetcing isError={isError} isFetching={isLoading} />
	}

	return (
		<>
			<ActionButton
				onClick={() => onOpen(modalNames.ADD_CAR)}
				label="Add new car"
				icon={<IoCarSportSharp />}
				height="140px"
				iconSize="80px"
				labelSize="20px"
				margin="0 0 30px 0"
			/>

			<GarageMainView
				cars={cars}
				paginationMeta={paginationMeta}
				setPage={setPage}
			/>

			<GarageModals />
		</>
	)
}

export default GaragePage
