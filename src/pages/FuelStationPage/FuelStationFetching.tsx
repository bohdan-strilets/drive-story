import { FC } from 'react'

import ErrorMessage from '@/components/UI/ErrorMessage'
import Loader from '@/components/UI/Loader'

import { FuelStationFetchingProps } from '@/types/props/Refueling/FuelStationFetchingProps'

const FuelStationFetching: FC<FuelStationFetchingProps> = ({
	isFetching,
	carId,
}) => {
	if (!carId) return <ErrorMessage message="Car ID is missing from the URL" />

	if (isFetching) return <Loader color="gray" />

	return null
}

export default FuelStationFetching
