import { FC } from 'react'
import { ImExit } from 'react-icons/im'

import useResponsive from '@/hooks/useResponsive'

import { routes } from '@/utils/navigation/routes'

import { UserBarProps } from '@/types/props/UI/UserBarProps'

import Button from '../Button'
import ImageBox from '../ImageBox'

import { Email, InfoContainer, Name, StyledLink } from './UserBar.styled'

const UserBar: FC<UserBarProps> = ({ name, email, avatarUrl }) => {
	const { maxMobile } = useResponsive()

	return (
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
			<Button variant="black" style={{ height: '80px', padding: '0 10px' }}>
				<ImExit />
			</Button>
		</StyledLink>
	)
}

export default UserBar
