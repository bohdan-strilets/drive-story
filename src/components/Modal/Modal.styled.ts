import styled from '@emotion/styled'
import { motion } from 'motion/react'

import { getColor } from '@/styles/helpers/getColor'
import { breakpoints } from '@/styles/media/breakpoints'
import { flexCenterDirection } from '@/styles/mixins/flexCenterDirection'

export const Wrapper = styled(motion.div)`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);

	width: 90%;
	max-height: 65%;

	background-color: ${getColor('white')};
	border-radius: 5px;
	box-shadow: var(--box-shadow);

	overflow-y: auto;

	@media screen and (min-width: ${breakpoints.tabletMin}) {
		width: 600px;
	}

	@media screen and (min-width: ${breakpoints.laptopMin}) {
		width: 700px;
	}

	@media screen and (min-width: ${breakpoints.desktopMin}) {
		width: 800px;
	}
`

export const Header = styled.div`
	position: relative;

	width: 100%;
	padding: 15px;

	background-color: ${getColor('yellow')};
	box-shadow: var(--box-shadow);

	border-top-right-radius: 5px;
	border-top-left-radius: 5px;

	@media screen and (min-width: ${breakpoints.tabletMin}) {
		padding: 30px;
	}
`

export const Title = styled.p`
	font-size: 16px;
	font-weight: 700;

	@media screen and (min-width: ${breakpoints.tabletMin}) {
		font-size: 18px;
	}
`

export const Content = styled.div`
	width: 100%;
	padding: 15px;

	@media screen and (min-width: ${breakpoints.tabletMin}) {
		padding: 50px 30px;
	}
`

export const Footer = styled.div`
	padding: 0 15px 15px 15px;

	@media screen and (min-width: ${breakpoints.tabletMin}) {
		padding: 0 30px 30px 30px;
	}
`

export const List = styled.ul`
	${flexCenterDirection()}
	justify-content: end;
`

export const Item = styled.li`
	width: 140px;
	margin-right: 15px;

	:last-child {
		margin-right: 0;
	}
`
