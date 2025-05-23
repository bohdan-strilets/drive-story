import styled from '@emotion/styled'
import { motion } from 'motion/react'

import { getColor } from '@/styles/helpers/getColor'
import { breakpoints } from '@/styles/media/breakpoints'
import { flexCenterDirection } from '@/styles/mixins/flexCenterDirection'

export const List = styled.ul`
	margin: 20px 0;

	@media screen and (min-width: ${breakpoints.tabletMin}) {
		margin: 30px 0;
	}
`

export const Item = styled(motion.li)`
	${flexCenterDirection()}
	justify-content: space-between;

	font-size: 12px;

	padding: 15px;

	border-bottom: 1px dotted ${getColor('gray')};

	:last-child {
		border-bottom: none;
	}
`

export const Property = styled.p`
	font-weight: 700;
`

export const Value = styled.p`
	color: ${getColor('gray')};
`
