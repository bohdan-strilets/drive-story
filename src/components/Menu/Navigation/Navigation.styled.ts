import styled from '@emotion/styled'
import { motion } from 'motion/react'
import { Link } from 'react-router-dom'

import { ListProps } from '@/types/props/Menu/NavigationProps'

import { getColor } from '@/styles/helpers/getColor'
import { breakpoints } from '@/styles/media/breakpoints'
import { flexCenterDirection } from '@/styles/mixins/flexCenterDirection'

export const List = styled.ul<ListProps>`
	width: 100%;
	margin: ${({ margin }) => margin};

	@media screen and (min-width: ${breakpoints.tabletMin}) {
		width: 100%;
	}
`

export const Item = styled(motion.li)`
	height: 40px;
	border-bottom: 1px dotted ${getColor('yellow')};

	:last-child {
		margin-bottom: 0;
		border-bottom: none;
	}
`

export const StyledLink = styled(Link)`
	${flexCenterDirection()}
	justify-content: start;

	width: 100%;
	height: 100%;

	transition: color var(--hover-effect);

	:hover,
	:focus {
		color: ${getColor('yellow')};
	}
`

export const Label = styled.p`
	font-weight: 500;
	margin-left: 15px;
`
