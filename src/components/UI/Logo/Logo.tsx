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

const Logo: FC<LogoProps> = ({ color = 'black', scale = 'large' }) => {
	return (
		<StyledLink to={routes.HOME}>
			<Container>
				<Title {...slideIn()} color={color} scale={scale}>
					drive
				</Title>
				<WheelIcon id="wheel-icon" color={color} scale={scale} />
				<Title {...slideIn('right')} color={color} scale={scale}>
					story
				</Title>
			</Container>
			<Subtitle {...fadeIn()} color={color} scale={scale}>
				Your car in detail
			</Subtitle>
		</StyledLink>
	)
}

export default Logo
