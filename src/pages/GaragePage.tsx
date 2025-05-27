import { AnimatePresence } from 'motion/react'
import { FC, useState } from 'react'
import { IoCarSportSharp } from 'react-icons/io5'

import Garage from '@/components/Garage'
import CarForm from '@/components/Garage/CarForm'
import Modal from '@/components/Modal'
import ActionButton from '@/components/UI/ActionButton'
import Loader from '@/components/UI/Loader'

import { useFetchCars } from '@/hooks/car/useFetchCars'
import useModal from '@/hooks/ui/useModal'
import useResponsive from '@/hooks/ui/useResponsive'

import { modalNames } from '@/config/modalConfig'

import { PaginationParams } from '@/types/params/PaginationParams'

const GaragePage: FC = () => {
	const [page, setPage] = useState(1)

	const { checkQueryParam, onOpen } = useModal()
	const { maxTablet } = useResponsive()

	const limit = maxTablet ? 6 : 9
	const paginationParams: PaginationParams = { limit, page }

	const { isLoading, data } = useFetchCars(paginationParams)
	const cars = data?.data ?? []

	const paginationMeta = data?.meta ?? {
		totalItems: 0,
		itemsPerPage: limit,
		itemCount: 0,
		totalPages: 1,
		currentPage: page,
	}

	if (isLoading) return <Loader color="gray" />

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

			<Garage cars={cars} paginationMeta={paginationMeta} setPage={setPage} />

			<AnimatePresence>
				{checkQueryParam(modalNames.ADD_CAR) && (
					<Modal key={modalNames.ADD_CAR} title="Add new car">
						<CarForm mode="create" />
					</Modal>
				)}
			</AnimatePresence>
		</>
	)
}

export default GaragePage
