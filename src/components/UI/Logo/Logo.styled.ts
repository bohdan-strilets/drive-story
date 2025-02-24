import styled from '@emotion/styled'
import { motion } from 'motion/react'
import { GiCarWheel } from 'react-icons/gi'
import { Link } from 'react-router-dom'

import {
	StyledLinkProps,
	SubtitleProps,
	TitleProps,
	WheelIconProps,
} from '@/types/props/UI/LogoProps'

import { getColor } from '@/styles/helpers/getColor'
import { media } from '@/styles/media/media'
import { flexCenterDirection } from '@/styles/mixins/flexCenterDirection'

export const StyledLink = styled(Link)<StyledLinkProps>`
	${flexCenterDirection('column', 'inline-flex')}

	transform: ${({ size }) => (size === 'small' ? 'scale(0.5)' : 'scale(1)')};
	transform-origin: top left;

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
	font-size: 28px;
	font-weight: 900;

	line-height: 1;
	text-transform: uppercase;

	color: ${({ color }) => getColor(color)};

	${media.minTablet`
	  font-size: 32px;
  `}

	${media.minLaptop`
		font-size: 36px;
	`}  
	          
	${media.minDesktop`
		font-size: 40px;
	`}
`

export const WheelIcon = styled(GiCarWheel)<WheelIconProps>`
	width: 50px;
	height: 50px;

	margin: 0 5px;

	fill: ${({ color }) => getColor(color)};
	transition: transform var(--hover-effect);

	${media.minTablet`
		width: 60px;
		height: 60px;
  `}

	${media.minLaptop`
		width: 65px;
		height: 65px;
	`}  
	          
	${media.minDesktop`
		width: 80px;
		height: 80px;
	`}
`

export const Subtitle = styled(motion.p)<SubtitleProps>`
	font-size: 14px;
	font-weight: 700;

	letter-spacing: 5px;
	line-height: 1;
	text-transform: uppercase;

	color: ${({ color }) => getColor(color)};

	${media.minTablet`
		font-size: 16px;
  `}

	${media.minDesktop`
		font-size: 18px;
	`}
`
