import styled from '@emotion/styled'
import { motion } from 'motion/react'

import { ItemProps } from '@/types/props/Garage/MaintenanceAlertsProps'

import { getColor } from '@/styles/helpers/getColor'
import { breakpoints } from '@/styles/media/breakpoints'
import { flexCenterDirection } from '@/styles/mixins/flexCenterDirection'

export const List = styled.ul`
	margin-bottom: 30px;

	@media screen and (min-width: ${breakpoints.tabletMin}) {
		${flexCenterDirection()}
		justify-content: space-between;
	}
`

export const Item = styled(motion.li)<ItemProps>`
	${flexCenterDirection('column')}

	font-weight: 700;
	font-size: 14px;

	width: 100%;
	padding: 5px;
	margin-bottom: 10px;

	background: ${({ isDatePassed, hasEntity }) => {
		if (hasEntity && isDatePassed) return getColor('#ffb5b5')
		if (hasEntity && !isDatePassed) return getColor('#bdffbd')
		return getColor('#d8d8d8')
	}};

	color: ${({ isDatePassed, hasEntity }) => {
		if (hasEntity && isDatePassed) return getColor('red')
		if (hasEntity && !isDatePassed) return getColor('green')
		return getColor('gray')
	}};

	border-radius: 5px;
	box-shadow: var(--box-shadow);

	cursor: pointer;
	transition: transform var(--hover-effect);

	:hover,
	:focus {
		transform: scale(0.99);
	}

	@media screen and (min-width: ${breakpoints.tabletMin}) {
		font-size: 16px;

		width: 33%;
		padding: 15px;
		margin-bottom: 0;
	}
`
