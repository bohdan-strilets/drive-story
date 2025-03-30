import { FC } from 'react'
import { ImExit } from 'react-icons/im'

import { useLogout } from '@/hooks/auth/useLogout'
import { useGetImage } from '@/hooks/ui/useGetImage'
import useResponsive from '@/hooks/ui/useResponsive'
import useSubmit from '@/hooks/ui/useSubmit'

import { routes } from '@/config/routes'

import { useUserStore } from '@/store/useUserStore'

import { defaultImages } from '@/utils/defaultImages'

import { UserBarProps } from '@/types/props/UI/UserBarProps'
import { AuthResponse } from '@/types/types/AuthResponse'

import Button from '../Button'
import ImageBox from '../ImageBox'

import {
	Email,
	InfoContainer,
	Name,
	StyledLink,
	Wrapper,
} from './UserBar.styled'

const UserBar: FC<UserBarProps> = ({ width }) => {
	const { minTablet } = useResponsive()
	const { mutateAsync: logout, isPending } = useLogout()
	const user = useUserStore((state) => state.user)

	const userAvatar = useGetImage({
		image: user?.avatars,
		defaultImage: defaultImages.avatar,
	})
	const userPoster = useGetImage({
		image: user?.posters,
		defaultImage: defaultImages.poster,
	})

	const logoutAndNavigate = useSubmit<AuthResponse | null>({
		callback: logout,
		navigateTo: routes.HOME,
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
				<Button
					color="black"
					background="yellow"
					hoverColor="white"
					hoverBackground="gray"
					width={minTablet ? '' : '100%'}
					height={minTablet ? '80px' : '40px'}
					padding="0 10px"
					onClick={logoutAndNavigate}
					disabled={isPending}
				>
					{isPending ? '...' : <ImExit />}
				</Button>
			</Wrapper>
		)
	)
}

export default UserBar
