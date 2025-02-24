import { FC } from 'react'

import { routes } from '@/utils/navigation/routes'

import { LogoProps } from '@/types/props/UI/LogoProps'

import { fadeIn } from '@/animations/fadeIn'
import { slideIn } from '@/animations/slideIn'

import {
	Container,
	StyledLink,
	Subtitle,
	Title,
	WheelIcon,
} from './Logo.styled'

const Logo: FC<LogoProps> = ({ color = 'black', size = 'large' }) => {
	return (
		<StyledLink to={routes.HOME} size={size}>
			<Container>
				<Title {...slideIn()} color={color}>
					drive
				</Title>
				<WheelIcon id="wheel-icon" color={color} />
				<Title {...slideIn('right')} color={color}>
					story
				</Title>
			</Container>
			<Subtitle {...fadeIn()} color={color}>
				Your car in detail
			</Subtitle>
		</StyledLink>
	)
}

export default Logo
