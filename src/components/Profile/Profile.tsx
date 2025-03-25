import { FC } from 'react'

import { useGetImage } from '@/hooks/ui/useGetImage'

import { useUserStore } from '@/store/useUserStore'

import { defaultImages } from '@/utils/defaultImages'

import ImageBox from '../UI/ImageBox'
import Loader from '../UI/Loader'

import AccountActions from './AccountActions'
import Header from './Header'
import { Information, SideMenu } from './Profile.styled'
import ProfileMeta from './ProfileMeta'
import UserInformation from './UserInformation'

const Profile: FC = () => {
	const user = useUserStore((state) => state.user)
	const fullName = `${user?.firstName} ${user?.lastName}`

	const userAvatarRef = useGetImage({
		image: user?.avatars,
		defaultImage: defaultImages.avatar,
	})
	const userPosterRef = useGetImage({
		image: user?.posters,
		defaultImage: defaultImages.poster,
	})

	return user ? (
		<div>
			<Header
				posterUrl={userPosterRef.current}
				fullName={fullName}
				nickname={user?.nickname}
			/>

			<Information>
				<UserInformation
					isActivated={user?.isActivated || false}
					email={user?.email}
					birthDate={user?.birthDate}
					phoneNumber={user?.phoneNumber}
					gender={user?.gender}
					country={user?.location?.country}
					city={user?.location?.city}
					postalCode={user?.location?.postalCode}
				/>

				<SideMenu>
					<ImageBox
						imageUrl={userAvatarRef.current}
						width="300px"
						height="300px"
						isBorder={true}
						isShadow={true}
					/>
					<ProfileMeta
						userId={user?._id}
						createdDate={user?.createdAt}
						updatedDate={user?.updatedAt}
					/>
					<AccountActions />
				</SideMenu>
			</Information>
		</div>
	) : (
		<Loader color={'gray'} />
	)
}

export default Profile
