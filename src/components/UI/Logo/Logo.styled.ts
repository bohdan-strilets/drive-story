import styled from '@emotion/styled'
import { motion } from 'motion/react'
import { GiCarWheel } from 'react-icons/gi'
import { Link } from 'react-router-dom'

import {
	SubtitleProps,
	TitleProps,
	WheelIconProps,
} from '@/types/props/UI/LogoProps'

import { getColor } from '@/styles/helpers/getColor'
import { breakpoints } from '@/styles/media/breakpoints'
import { flexCenterDirection } from '@/styles/mixins/flexCenterDirection'

export const StyledLink = styled(Link)`
	${flexCenterDirection('column', 'inline-flex')}

	&:hover #wheel-icon,
	&:focus #wheel-icon {
		transform: rotate(360deg);
	}
`

export const Container = styled.div`
	${flexCenterDirection('row', 'inline-flex')}

	margin-bottom: 10px;
`

export const Title = styled(motion.p)<TitleProps>`
	font-size: ${({ variant }) => (variant === 'large' ? '28px' : '20px')};
	font-weight: 900;

	line-height: 1;
	text-transform: uppercase;

	color: ${({ color }) => getColor(color)};

	@media screen and (min-width: ${breakpoints.tabletMin}) {
		font-size: ${({ variant }) => (variant === 'large' ? '32px' : '20px')};
	}

	@media screen and (min-width: ${breakpoints.laptopMin}) {
		font-size: ${({ variant }) => (variant === 'large' ? '36px' : '20px')};
	}

	@media screen and (min-width: ${breakpoints.desktopMin}) {
		font-size: ${({ variant }) => (variant === 'large' ? '40px' : '26px')};
	}
`

export const WheelIcon = styled(GiCarWheel)<WheelIconProps>`
	width: ${({ variant }) => (variant === 'large' ? '50px' : '35px')};
	height: ${({ variant }) => (variant === 'large' ? '50px' : '35px')};

	margin: 0 5px;

	fill: ${({ color }) => getColor(color)};
	transition: transform var(--hover-effect);

	@media screen and (min-width: ${breakpoints.tabletMin}) {
		width: ${({ variant }) => (variant === 'large' ? '60px' : '40px')};
		height: ${({ variant }) => (variant === 'large' ? '60px' : '40px')};
	}

	@media screen and (min-width: ${breakpoints.laptopMin}) {
		width: ${({ variant }) => (variant === 'large' ? '65px' : '45px')};
		height: ${({ variant }) => (variant === 'large' ? '65px' : '45px')};
	}

	@media screen and (min-width: ${breakpoints.desktopMin}) {
		width: ${({ variant }) => (variant === 'large' ? '80px' : '50px')};
		height: ${({ variant }) => (variant === 'large' ? '80px' : '45px')};
	}
`

export const Subtitle = styled(motion.p)<SubtitleProps>`
	font-size: ${({ variant }) => (variant === 'large' ? '14px' : '7px')};
	font-weight: 700;

	letter-spacing: 5px;
	line-height: 1;
	text-transform: uppercase;

	color: ${({ color }) => getColor(color)};

	@media screen and (min-width: ${breakpoints.tabletMin}) {
		font-size: ${({ variant }) => (variant === 'large' ? '16px' : '8px')};
	}

	@media screen and (min-width: ${breakpoints.desktopMin}) {
		font-size: ${({ variant }) => (variant === 'large' ? '18px' : '10px')};
	}
`
