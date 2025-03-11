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
	font-size: ${({ size }) => (size === 'large' ? '28px' : '20px')};
	font-weight: 900;

	line-height: 1;
	text-transform: uppercase;

	color: ${({ color }) => getColor(color)};

	@media screen and (min-width: ${breakpoints.tabletMin}) {
		font-size: ${({ size }) => (size === 'large' ? '32px' : '20px')};
	}

	@media screen and (min-width: ${breakpoints.laptopMin}) {
		font-size: ${({ size }) => (size === 'large' ? '36px' : '20px')};
	}

	@media screen and (min-width: ${breakpoints.desktopMin}) {
		font-size: ${({ size }) => (size === 'large' ? '40px' : '26px')};
	}
`

export const WheelIcon = styled(GiCarWheel)<WheelIconProps>`
	width: ${({ size }) => (size === 'large' ? '50px' : '35px')};
	height: ${({ size }) => (size === 'large' ? '50px' : '35px')};

	margin: 0 5px;

	fill: ${({ color }) => getColor(color)};
	transition: transform var(--hover-effect);

	@media screen and (min-width: ${breakpoints.tabletMin}) {
		width: ${({ size }) => (size === 'large' ? '60px' : '40px')};
		height: ${({ size }) => (size === 'large' ? '60px' : '40px')};
	}

	@media screen and (min-width: ${breakpoints.laptopMin}) {
		width: ${({ size }) => (size === 'large' ? '65px' : '45px')};
		height: ${({ size }) => (size === 'large' ? '65px' : '45px')};
	}

	@media screen and (min-width: ${breakpoints.desktopMin}) {
		width: ${({ size }) => (size === 'large' ? '80px' : '50px')};
		height: ${({ size }) => (size === 'large' ? '80px' : '45px')};
	}
`

export const Subtitle = styled(motion.p)<SubtitleProps>`
	font-size: ${({ size }) => (size === 'large' ? '14px' : '7px')};
	font-weight: 700;

	letter-spacing: 5px;
	line-height: 1;
	text-transform: uppercase;

	color: ${({ color }) => getColor(color)};

	@media screen and (min-width: ${breakpoints.tabletMin}) {
		font-size: ${({ size }) => (size === 'large' ? '16px' : '8px')};
	}

	@media screen and (min-width: ${breakpoints.desktopMin}) {
		font-size: ${({ size }) => (size === 'large' ? '18px' : '10px')};
	}
`
