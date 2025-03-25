import { FC } from 'react'
import { ImExit } from 'react-icons/im'

import { useLogout } from '@/hooks/auth/useLogout'
import { useGetImage } from '@/hooks/ui/useGetImage'
import useResponsive from '@/hooks/ui/useResponsive'

import { routes } from '@/config/routes'

import { useUserStore } from '@/store/useUserStore'

import { defaultImages } from '@/utils/defaultImages'

import { UserBarProps } from '@/types/props/UI/UserBarProps'

import Button from '../Button'
import ImageBox from '../ImageBox'

import { Email, InfoContainer, StyledLink, Wrapper } from './UserBar.styled'

const UserBar: FC<UserBarProps> = ({
	width,
	color,
	background,
	hoverColor,
	hoverBackground,
}) => {
	const { minTablet } = useResponsive()
	const { mutateAsync: logout, isPending } = useLogout()
	const user = useUserStore((state) => state.user)

	const userAvatarRef = useGetImage({
		image: user?.avatars,
		defaultImage: defaultImages.avatar,
	})

	return (
		<Wrapper width={width}>
			<StyledLink to={routes.PROFILE}>
				<InfoContainer>
					{user?.firstName} {user?.lastName}
					<Email>{user?.email}</Email>
				</InfoContainer>
				<ImageBox
					imageUrl={userAvatarRef.current}
					width="80px"
					height="80px"
					isBorder={true}
					isShadow={true}
				/>
			</StyledLink>
			<Button
				color={color}
				background={background}
				hoverColor={hoverColor}
				hoverBackground={hoverBackground}
				width={minTablet ? '' : '100%'}
				height={minTablet ? '80px' : '40px'}
				padding="0 10px"
				onClick={() => logout()}
				disabled={isPending}
			>
				{isPending ? '...' : <ImExit />}
			</Button>
		</Wrapper>
	)
}

export default UserBar
