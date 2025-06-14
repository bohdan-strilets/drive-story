import { FC } from 'react'

import { useGetImage } from '@/hooks/ui/useGetImage'
import useModal from '@/hooks/ui/useModal'

import { modalNames } from '@/config/modalConfig'

import { getUserActions } from '@/descriptors/actions/getUserActions'
import { getUserUploadActions } from '@/descriptors/actions/getUserUploadActions'
import { userField } from '@/descriptors/fields/userField'

import { defaultImages } from '@/utils/defaultImages'

import { ProfileProps } from '@/types/props/Profile/ProfileProps'

import ActionMenu from '../Layout/ActionMenu'
import PropertyList from '../Layout/PropertyList'
import ImageBox from '../UI/ImageBox'
import OpenGalleryButton from '../UI/OpenGalleryButton'

import Header from './Header'
import { Information, InformationWrapper, SideMenu } from './Profile.styled'
import ProfileMeta from './ProfileMeta'

const Profile: FC<ProfileProps> = ({ user }) => {
	const { onOpen } = useModal()
	const userActions = getUserActions({ onOpen })
	const userUploadActions = getUserUploadActions({ onOpen })

	const userAvatar = useGetImage({
		image: user?.avatars,
		defaultImage: defaultImages.avatar,
	})

	const userPoster = useGetImage({
		image: user?.posters,
		defaultImage: defaultImages.poster,
	})

	return (
		<>
			<Header
				posterUrl={userPoster}
				fullName={`${user?.firstName} ${user?.lastName}`}
				nickname={user?.nickname}
			/>
			<Information>
				<InformationWrapper>
					<PropertyList descriptors={userField} context={user} />
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

					<ActionMenu descriptors={userUploadActions} />
					<ProfileMeta />
					<ActionMenu descriptors={userActions} />
				</SideMenu>
			</Information>
		</>
	)
}

export default Profile
