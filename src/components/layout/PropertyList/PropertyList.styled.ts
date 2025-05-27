import styled from '@emotion/styled'
import { motion } from 'motion/react'

import { getColor } from '@/styles/helpers/getColor'
import { breakpoints } from '@/styles/media/breakpoints'
import { flexCenterDirection } from '@/styles/mixins/flexCenterDirection'

export const List = styled.ul`
	width: 100%;
`

export const Item = styled(motion.li)`
	${flexCenterDirection()}
	justify-content: space-between;

	font-size: 14px;
	padding: 15px;

	border-bottom: 1px dotted ${getColor('gray')};

	:last-child {
		border-bottom: none;
	}

	@media screen and (min-width: ${breakpoints.tabletMin}) {
		font-size: 16px;
		padding: 25px 15px;
	}
`

export const Property = styled.p`
	font-weight: 700;

	min-width: 35%;
`

export const Value = styled.div`
	color: ${getColor('gray')};

	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
`
