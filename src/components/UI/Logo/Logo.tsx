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

const Logo: FC<LogoProps> = ({ color = 'black', variant = 'large' }) => {
	return (
		<StyledLink to={routes.HOME}>
			<Container>
				<Title {...slideIn()} color={color} variant={variant}>
					drive
				</Title>
				<WheelIcon id="wheel-icon" color={color} variant={variant} />
				<Title {...slideIn('right')} color={color} variant={variant}>
					story
				</Title>
			</Container>
			<Subtitle {...fadeIn()} color={color} variant={variant}>
				Your car in detail
			</Subtitle>
		</StyledLink>
	)
}

export default Logo
