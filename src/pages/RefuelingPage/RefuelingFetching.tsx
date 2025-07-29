import { FC } from 'react'
import { generatePath, useNavigate } from 'react-router-dom'

import ButtonGoBack from '@/components/UI/ButtonGoBack'
import ErrorMessage from '@/components/UI/ErrorMessage'
import Loader from '@/components/UI/Loader'

import { routes } from '@/config/routes'

import { RefuelingFetchingProps } from '@/types/props/Refueling/RefuelingFetchingProps'

const RefuelingFetching: FC<RefuelingFetchingProps> = ({
	refuelingId,
	isFetching,
	isError,
	carId,
}) => {
	const navigate = useNavigate()
	const path = generatePath(routes.REFUELING_BY_CAR, { carId: carId ?? '' })
	const message = `Refueling info with ID: ${refuelingId} was not found`

	if (isError || !refuelingId) {
		return (
			<>
				<ButtonGoBack
					label="fuel station"
					onClick={() => navigate(path)}
					margin="0 0 5px 0"
					color="black"
				/>
				<ErrorMessage message={message} />
			</>
		)
	}

	if (isFetching) return <Loader color="gray" />

	return null
}

export default RefuelingFetching
