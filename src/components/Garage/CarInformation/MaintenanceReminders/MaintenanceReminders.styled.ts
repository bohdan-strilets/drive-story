import styled from '@emotion/styled'
import { motion } from 'motion/react'

import { getColor } from '@/styles/helpers/getColor'
import { breakpoints } from '@/styles/media/breakpoints'
import { flexCenterDirection } from '@/styles/mixins/flexCenterDirection'

export const List = styled.ul`
	margin-bottom: 15px;

	@media screen and (min-width: ${breakpoints.tabletMin}) {
		${flexCenterDirection()}
		justify-content: space-between;
	}
`

export const Item = styled(motion.li)<{ isDatePassed: boolean }>`
	${flexCenterDirection('column')}

	font-weight: 700;
	font-size: 14px;

	width: 100%;
	padding: 5px;
	margin-bottom: 10px;

	background-color: ${({ isDatePassed }) =>
		isDatePassed ? `${getColor('#ffb5b5')}` : `${getColor('#bdffbd')}`};

	color: ${({ isDatePassed }) =>
		isDatePassed ? `${getColor('red')}` : `${getColor('green')}`};

	border-radius: 5px;
	box-shadow: var(--box-shadow);

	@media screen and (min-width: ${breakpoints.tabletMin}) {
		font-size: 16px;

		width: 30%;
		padding: 15px;
		margin-bottom: 0;
	}
`
