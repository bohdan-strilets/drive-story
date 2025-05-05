import { FC } from 'react'

import { useGetImage } from '@/hooks/ui/useGetImage'
import useModal from '@/hooks/ui/useModal'

import { userActionDescriptors } from '@/descriptors/userActionDescriptors'
import { userFieldDescriptors } from '@/descriptors/userFieldDescriptors'
import { userUploadActionDescriptors } from '@/descriptors/userUploadActionDescriptors'

import { useUserStore } from '@/store/useUserStore'

import { defaultImages } from '@/utils/defaultImages'

import { ActionContext } from '@/types/types/ActionDescriptor'

import ActionMenu from '../Layout/ActionMenu'
import PropertyList from '../Layout/PropertyList'
import ImageBox from '../UI/ImageBox'
import Loader from '../UI/Loader'
import OpenGalleryButton from '../UI/OpenGalleryButton'

import Header from './Header'
import { Information, InformationWrapper, SideMenu } from './Profile.styled'
import ProfileMeta from './ProfileMeta'

const Profile: FC = () => {
	const { onOpen, modalNames } = useModal()
	const actionCtx: ActionContext = { onOpen, modalNames }

	const user = useUserStore((state) => state.user)
	const isLoading = useUserStore((state) => state.isLoading)

	const userAvatar = useGetImage({
		image: user?.avatars,
		defaultImage: defaultImages.avatar,
	})
	const userPoster = useGetImage({
		image: user?.posters,
		defaultImage: defaultImages.poster,
	})

	if (isLoading) {
		return <Loader color={'gray'} />
	}

	return (
		<>
			<Header
				posterUrl={userPoster}
				fullName={`${user?.firstName} ${user?.lastName}`}
				nickname={user?.nickname}
			/>
			<Information>
				<InformationWrapper>
					<PropertyList descriptors={userFieldDescriptors} context={user} />
				</InformationWrapper>
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
					<ActionMenu
						descriptors={userUploadActionDescriptors}
						context={actionCtx}
					/>
					<ProfileMeta />
					<ActionMenu descriptors={userActionDescriptors} context={actionCtx} />
				</SideMenu>
			</Information>
		</>
	)
}

export default Profile
