import { FC } from 'react'

import Profile from '@/components/Profile'

import { useGetCurrentUser } from '@/hooks/user/useGetCurrentUser'

import { useAuthStore } from '@/store/useAuthStore'

import ProfileFetching from './ProfileFetching'
import ProfileModals from './ProfileModals'

const ProfilePage: FC = () => {
	const isLoggedIn = useAuthStore((state) => state.isLoggedIn)

	const { data, isLoading } = useGetCurrentUser(isLoggedIn)
	const user = data?.data

	if (!user || isLoading) {
		return <ProfileFetching isFetching={isLoading} user={user} />
	}

	return (
		user && (
			<>
				<Profile user={user} />

				<ProfileModals user={user} />
			</>
		)
	)
}

export default ProfilePage
