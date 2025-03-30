import { nanoid } from 'nanoid'
import { FC, useMemo } from 'react'
import { BsImageFill } from 'react-icons/bs'
import { ImExit } from 'react-icons/im'
import { MdDelete, MdEmail, MdImagesearchRoller } from 'react-icons/md'
import { RiLockPasswordFill, RiProfileFill } from 'react-icons/ri'

import { useGetImage } from '@/hooks/ui/useGetImage'
import useModal from '@/hooks/ui/useModal'

import { useUserStore } from '@/store/useUserStore'

import { defaultImages } from '@/utils/defaultImages'

import ImageBox from '../UI/ImageBox'
import Loader from '../UI/Loader'
import OpenGalleryButton from '../UI/OpenGalleryButton'

import AccountActions from './AccountActions'
import Header from './Header'
import { Information, SideMenu } from './Profile.styled'
import ProfileMeta from './ProfileMeta'
import UserInformation from './UserInformation'

const Profile: FC = () => {
	const user = useUserStore((state) => state.user)
	const fullName = `${user?.firstName} ${user?.lastName}`
	const { onOpen, modalNames } = useModal()

	const userAvatar = useGetImage({
		image: user?.avatars,
		defaultImage: defaultImages.avatar,
	})
	const userPoster = useGetImage({
		image: user?.posters,
		defaultImage: defaultImages.poster,
	})

	const settingActions = useMemo(
		() => [
			{
				id: nanoid(),
				callback: () => onOpen(modalNames.EDIT_EMAIL),
				label: 'Edit email',
				icon: <MdEmail />,
			},
			{
				id: nanoid(),
				callback: () => onOpen(modalNames.EDIT_PASSWORD),
				label: 'Edit password',
				icon: <RiLockPasswordFill />,
			},
			{
				id: nanoid(),
				callback: () => onOpen(modalNames.EDIT_PROFILE),
				label: 'Edit profile',
				icon: <RiProfileFill />,
			},
			{
				id: nanoid(),
				callback: () => onOpen(modalNames.DELETE_PROFILE),
				label: 'Delete profile',
				icon: <MdDelete />,
			},
			{
				id: nanoid(),
				callback: () => onOpen(modalNames.EXIT_PROFILE),
				label: 'Exit',
				icon: <ImExit />,
			},
		],
		[]
	)

	const uploadActions = useMemo(
		() => [
			{
				id: nanoid(),
				callback: () => onOpen(modalNames.UPLOAD_AVATAR),
				label: 'Upload avatar',
				icon: <BsImageFill />,
			},
			{
				id: nanoid(),
				callback: () => onOpen(modalNames.UPLOAD_POSTER),
				label: 'Upload poster',
				icon: <MdImagesearchRoller />,
			},
		],
		[]
	)

	return user ? (
		<div>
			<Header
				posterUrl={userPoster}
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
					<OpenGalleryButton
						onClick={() => onOpen(modalNames.USER_AVATARS)}
						width="300px"
					>
						<ImageBox
							imageUrl={userAvatar}
							width="300px"
							height="300px"
							isBorder={true}
							isShadow={true}
						/>
					</OpenGalleryButton>
					<AccountActions actions={uploadActions} />
					<ProfileMeta
						userId={user?._id}
						createdDate={user?.createdAt}
						updatedDate={user?.updatedAt}
					/>
					<AccountActions actions={settingActions} />
				</SideMenu>
			</Information>
		</div>
	) : (
		<Loader color={'gray'} />
	)
}

export default Profile
