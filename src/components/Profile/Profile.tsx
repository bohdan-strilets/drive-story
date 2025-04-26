import { FC } from 'react'

import useModal from '@/hooks/ui/useModal'
import { useProfile } from '@/hooks/ui/useProfile'

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
	const {
		fullName,
		nickname,
		userAvatar,
		userPoster,
		userInfoList,
		uploadActions,
		settingActions,
		isLoading,
	} = useProfile()

	if (isLoading) {
		return <Loader color={'gray'} />
	}

	return (
		<>
			<Header posterUrl={userPoster} fullName={fullName} nickname={nickname} />
			<Information>
				<InformationWrapper>
					<PropertyList elements={userInfoList} />
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
					<ActionMenu actions={uploadActions} />
					<ProfileMeta />
					<ActionMenu actions={settingActions} />
				</SideMenu>
			</Information>
		</>
	)
}

export default Profile
