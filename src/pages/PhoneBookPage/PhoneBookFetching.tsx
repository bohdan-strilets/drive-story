import { FC } from 'react'

import Loader from '@/components/UI/Loader'

import { PhoneBookFetchingProps } from '@/types/props/Refueling/PhoneBookFetchingProps'

const PhoneBookFetching: FC<PhoneBookFetchingProps> = ({ isFetching }) => {
	if (isFetching) {
		return <Loader color="gray" />
	}

	return null
}

export default PhoneBookFetching
