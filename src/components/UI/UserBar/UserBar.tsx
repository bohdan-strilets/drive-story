import { FC } from 'react'

import { useGetImage } from '@/hooks/ui/useGetImage'

import { routes } from '@/config/routes'

import { useUserStore } from '@/store/useUserStore'

import { defaultImages } from '@/utils/defaultImages'

import { UserBarProps } from '@/types/props/UI/UserBarProps'

import ImageBox from '../ImageBox'

import {
	Email,
	InfoContainer,
	Name,
	StyledLink,
	Wrapper,
} from './UserBar.styled'

const UserBar: FC<UserBarProps> = ({ width }) => {
	const user = useUserStore((state) => state.user)

	const userAvatar = useGetImage({
		image: user?.avatars,
		defaultImage: defaultImages.avatar,
	})
	const userPoster = useGetImage({
		image: user?.posters,
		defaultImage: defaultImages.poster,
	})

	return (
		user && (
			<Wrapper width={width} posterUrl={userPoster}>
				<StyledLink to={routes.PROFILE}>
					<InfoContainer>
						<Name>
							{user?.firstName} {user?.lastName}
						</Name>
						<Email>{user?.email}</Email>
					</InfoContainer>
					<ImageBox
						imageUrl={userAvatar}
						width="80px"
						height="80px"
						isBorder={true}
						isShadow={true}
					/>
				</StyledLink>
			</Wrapper>
		)
	)
}

export default UserBar
