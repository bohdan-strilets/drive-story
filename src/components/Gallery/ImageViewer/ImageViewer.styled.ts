import styled from '@emotion/styled'
import { motion } from 'motion/react'

import { TimerDisplayProps } from '@/types/props/Gallery/ImageViewerProps'

import { getColor } from '@/styles/helpers/getColor'
import { breakpoints } from '@/styles/media/breakpoints'
import { flexCenterDirection } from '@/styles/mixins/flexCenterDirection'

export const Image = styled(motion.img)`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);

	max-width: 100%;
	max-height: 100%;
	width: auto;
	height: 95%;

	object-fit: contain;
`

export const FooterBar = styled.div`
	position: absolute;
	left: 50%;
	bottom: 30px;
	transform: translateX(-50%);

	${flexCenterDirection()}

	width: 100%;
	padding: 15px;

	background: var(--black-transparent-gradient);

	@media screen and (min-width: ${breakpoints.tabletMin}) {
		padding: 25px;
	}
`

export const Counter = styled.div`
	${flexCenterDirection()}
	margin: 0 15px;

	@media screen and (min-width: ${breakpoints.tabletMin}) {
		margin: 0 85px;
	}

	@media screen and (min-width: ${breakpoints.laptopMin}) {
		margin: 0 120px;
	}
`

export const TimerDisplay = styled.div<TimerDisplayProps>`
	position: relative;
	${flexCenterDirection()}

	width: 30px;
	height: 30px;
	margin-left: 15px;

	background: var(--black-transparent-gradient);
	color: ${getColor('white')};
	border-radius: 4px;

	user-select: none;
	overflow: hidden;

	@media screen and (min-width: ${breakpoints.tabletMin}) {
		width: 40px;
		height: 40px;
	}

	::after {
		content: '';
		position: absolute;
		top: 100%;
		left: 0;

		width: 30px;
		height: 30px;

		border-radius: 4px;
		background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(238, 205, 16, 0.8));

		animation: ${({
			slideDuration,
		}) => `slide ${slideDuration + 1}s linear forwards
			infinite`};

		@media screen and (min-width: ${breakpoints.tabletMin}) {
			width: 40px;
			height: 40px;
		}
	}

	@keyframes slide {
		0% {
			top: 100%;
		}
		100% {
			top: 0;
		}
	}
`
