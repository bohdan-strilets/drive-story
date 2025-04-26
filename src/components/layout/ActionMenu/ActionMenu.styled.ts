import styled from '@emotion/styled'
import { motion } from 'motion/react'

import { getColor } from '@/styles/helpers/getColor'
import { breakpoints } from '@/styles/media/breakpoints'
import { flexCenterDirection } from '@/styles/mixins/flexCenterDirection'

export const Item = styled(motion.li)`
	${flexCenterDirection()}
	justify-content: space-between;

	width: 100%;
	height: 100%;

	border-bottom: 1px dotted ${getColor('gray')};

	:last-child {
		border-bottom: none;
	}
`

export const Button = styled.button`
	${flexCenterDirection()}
	justify-content: start;

	font-size: 14px;
	padding: 15px;
	width: 100%;

	background: transparent;
	color: ${getColor('black')};

	cursor: pointer;
	transition: background var(--hover-effect);

	:hover,
	:focus {
		background: ${getColor('yellow')};
	}

	@media screen and (min-width: ${breakpoints.tabletMin}) {
		font-size: 16px;
	}
`

export const Label = styled.span`
	margin-left: 15px;
`
