import { FC } from 'react'

import ErrorMessage from '@/components/UI/ErrorMessage'
import Loader from '@/components/UI/Loader'

import { ProfileFetchingProps } from '@/types/props/Profile/ProfileFetchingProps'

const ProfileFetching: FC<ProfileFetchingProps> = ({ user, isFetching }) => {
	if (!user) {
		return <ErrorMessage message="User not found" />
	}

	if (isFetching) return <Loader color={'gray'} />

	return null
}

export default ProfileFetching
