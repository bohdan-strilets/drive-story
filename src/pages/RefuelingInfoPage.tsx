import { FC } from 'react'
import { useParams } from 'react-router-dom'

import ErrorState from '@/components/Refueling/ErrorState/ErrorState'
import Loader from '@/components/UI/Loader'

import { useFetchFueling } from '@/hooks/fueling/useFetchFueling'

const RefuelingInfoPage: FC = () => {
	const { refuelingId } = useParams()
	const { carId } = useParams()

	const { data: refueling, isLoading, isError } = useFetchFueling(refuelingId)

	if (isLoading) return <Loader color="gray" />
	if (isError) return <ErrorState carId={carId!} />

	return <p>RefuelingInfoPage</p>
}

export default RefuelingInfoPage
