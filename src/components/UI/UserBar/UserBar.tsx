import { FC } from 'react'
import { ImExit } from 'react-icons/im'

import useResponsive from '@/hooks/useResponsive'

import { routes } from '@/config/routes'

import { UserBarProps } from '@/types/props/UI/UserBarProps'

import Button from '../Button'
import ImageBox from '../ImageBox'

import {
	Email,
	InfoContainer,
	Name,
	StyledLink,
	Wrapper,
} from './UserBar.styled'

const UserBar: FC<UserBarProps> = ({
	name,
	email,
	avatarUrl,
	width,
	color,
	background,
	hoverColor,
	hoverBackground,
}) => {
	const { minTablet } = useResponsive()

	return (
		<Wrapper width={width}>
			<StyledLink to={routes.PROFILE}>
				<InfoContainer>
					{name && <Name>{name}</Name>}
					<Email>{email}</Email>
				</InfoContainer>
				<ImageBox
					imageUrl={avatarUrl}
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
			>
				<ImExit />
			</Button>
		</Wrapper>
	)
}

export default UserBar
