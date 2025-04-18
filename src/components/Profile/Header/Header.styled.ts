import styled from '@emotion/styled'
import { motion } from 'motion/react'

import { WrapperProps } from '@/types/props/Profile/HeaderProps'

import { getColor } from '@/styles/helpers/getColor'
import { breakpoints } from '@/styles/media/breakpoints'
import { flexCenterDirection } from '@/styles/mixins/flexCenterDirection'

export const Wrapper = styled.div`
	margin-bottom: 40px;
`

export const Poster = styled(motion.div)<WrapperProps>`
	${flexCenterDirection('column')}
	justify-content: start;
	align-items: start;

	width: 100%;
	height: 140px;
	padding: 15px;

	background-image: ${({ posterUrl }) =>
		`var(--black-transparent-gradient), url(${posterUrl})`};
	background-position: center;
	background-size: cover;
	background-repeat: no-repeat;

	box-shadow: var(--box-shadow);

	@media screen and (min-width: ${breakpoints.tabletMin}) {
		height: 240px;
		padding: 30px;
	}
`

export const FullName = styled.p`
	text-transform: uppercase;
	font-size: 20px;
	font-weight: 900;

	color: ${getColor('white')};

	@media screen and (min-width: ${breakpoints.tabletMin}) {
		font-size: 44px;
	}
`

export const Nickname = styled.p`
	font-weight: 700;
	font-size: 16px;

	color: ${getColor('white')};

	@media screen and (min-width: ${breakpoints.tabletMin}) {
		font-size: 24px;
	}
`
