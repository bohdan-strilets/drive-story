import styled from '@emotion/styled'
import { motion } from 'motion/react'

import { getColor } from '@/styles/helpers/getColor'
import { breakpoints } from '@/styles/media/breakpoints'
import { flexCenterDirection } from '@/styles/mixins/flexCenterDirection'

export const Backdtop = styled(motion.div)`
	position: fixed;
	top: 0;
	left: 0;

	width: 100vw;
	height: 100vh;

	background-color: rgba(0, 0, 0, 0.7);
`

export const Wrapper = styled(motion.div)`
	position: relative;

	width: 310px;
	height: 100vh;
	padding: 30px 15px 15px 15px;

	background-color: ${getColor('black')};
	color: ${getColor('white')};
	box-shadow: var(--box-shadow);

	overflow-y: auto;

	@media screen and (min-width: ${breakpoints.tabletMin}) {
		width: 500px;
		padding: 70px 35px 35px 35px;
	}

	@media screen and (min-width: ${breakpoints.desktopMin}) {
		width: 600px;
	}
`

export const Footer = styled.div`
	${flexCenterDirection('column')}
	align-items: end;

	margin-top: 70px;

	@media screen and (min-width: ${breakpoints.tabletMin}) {
		margin-top: 100px;
	}
`

export const CopyrightContainer = styled.div`
	${flexCenterDirection()}

	width: 100%;
`
