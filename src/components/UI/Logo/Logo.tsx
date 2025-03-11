import { FC } from 'react'

import { routes } from '@/config/routes'

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
		<StyledLink to={routes.HOME}>
			<Container>
				<Title {...slideIn()} color={color} size={size}>
					drive
				</Title>
				<WheelIcon id="wheel-icon" color={color} size={size} />
				<Title {...slideIn('right')} color={color} size={size}>
					story
				</Title>
			</Container>
			<Subtitle {...fadeIn()} color={color} size={size}>
				Your car in detail
			</Subtitle>
		</StyledLink>
	)
}

export default Logo
