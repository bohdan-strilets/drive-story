import { FC } from 'react'

import ErrorMessage from '@/components/UI/ErrorMessage'
import Loader from '@/components/UI/Loader'

import { GarageFetcingProps } from '@/types/props/Garage/GarageFetcingProps'

const GarageFetcing: FC<GarageFetcingProps> = ({ isFetching, isError }) => {
	if (isError) {
		return <ErrorMessage message="Failed to load data" />
	}

	if (isFetching) {
		return <Loader color="gray" />
	}

	return null
}

export default GarageFetcing
