import styled from '@emotion/styled'
import { motion } from 'motion/react'

import { breakpoints } from '@/styles/media/breakpoints'
import { flexCenterDirection } from '@/styles/mixins/flexCenterDirection'

export const List = styled(motion.ul)`
	${flexCenterDirection()}
	flex-wrap: wrap;

	gap: 5px;
	padding: 0;
`

export const Item = styled(motion.li)`
	flex: 1 1 100%;
	box-sizing: border-box;
	max-width: 100%;
	height: 200px;

	@media screen and (min-width: ${breakpoints.tabletMin}) {
		flex: 1 1 calc(33% - 5px);
		max-width: calc(33% - 5px);
	}
`

export const Button = styled.button`
	width: 100%;
	height: 100%;

	background-color: transparent;
`
