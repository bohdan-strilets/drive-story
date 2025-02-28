import styled from '@emotion/styled'
import { motion } from 'motion/react'
import { Link } from 'react-router-dom'

import { ItemProps, ListProps } from '@/types/props/Menu/NavigationProps'

import { getColor } from '@/styles/helpers/getColor'
import { breakpoints } from '@/styles/media/breakpoints'
import { flexCenterDirection } from '@/styles/mixins/flexCenterDirection'

export const List = styled.ul<ListProps>`
	width: 100%;
	margin: ${({ margin }) => margin};
`

export const Item = styled(motion.li)<ItemProps>`
	height: ${({ itemHeight }) => (itemHeight ? itemHeight : '40px')};
	border-bottom: 1px dotted ${getColor('gray')};

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
	padding: 0 10px;

	transition:
		background-color var(--hover-effect),
		color var(--hover-effect);

	:hover,
	:focus {
		background-color: ${getColor('yellow')};
		color: ${getColor('black')};
	}

	:hover .icon,
	:focus .icon {
		fill: ${getColor('black')};
	}

	@media screen and (min-width: ${breakpoints.tabletMin}) {
		padding: 0 15px;
	}
`

export const Label = styled.p`
	font-weight: 500;
	margin-left: 15px;
`
