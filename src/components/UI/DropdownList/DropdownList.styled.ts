import styled from '@emotion/styled'
import { motion } from 'motion/react'
import { IoMdArrowDropdown } from 'react-icons/io'

import {
	ArrowIconProps,
	ListProps,
	WrapperProps,
} from '@/types/props/UI/DropdownListProps'

import { getColor } from '@/styles/helpers/getColor'
import { breakpoints } from '@/styles/media/breakpoints'
import { flexCenterDirection } from '@/styles/mixins/flexCenterDirection'

export const Wrapper = styled.div<WrapperProps>`
	position: relative;

	width: ${({ width }) => width};
	margin: ${({ margin }) => margin};
`

export const CustomInput = styled.button`
	${flexCenterDirection()}
	justify-content: space-between;

	width: 100%;
	height: 30px;
	padding: 0 10px;
	margin: 5px 0;

	font-size: 14px;

	background-color: ${getColor('#e4e4e4')};
	color: ${getColor('black')};
	border-radius: 3px;
	border-bottom: 2px solid transparent;

	cursor: pointer;
	transition: border-bottom-color var(--hover-effect);

	@media screen and (min-width: ${breakpoints.tabletMin}) {
		height: 35px;
		font-size: 16px;
	}

	@media screen and (min-width: ${breakpoints.laptopMin}) {
		height: 40px;
	}
`

export const ArrowIcon = styled(IoMdArrowDropdown, {
	shouldForwardProp: (prop) => prop !== 'isOpen',
})<ArrowIconProps>`
	transform: ${({ isOpen }) => (isOpen ? 'rotate(180deg)' : 'rotate(0deg)')};
	transition: transform var(--hover-effect);
`

export const List = styled.ul<ListProps>`
	position: absolute;
	top: ${({ listPosition }) => listPosition === 'bottom' && '110%'};
	bottom: ${({ listPosition }) => listPosition === 'top' && '110%'};
	left: 0;

	z-index: 1;
	overflow-y: auto;

	width: 100%;
	max-height: ${({ listHeight }) => `${listHeight}px`};

	background: ${getColor('white')};
	box-shadow: var(--box-shadow);
	border-radius: 3px;
`

export const Item = styled(motion.li)`
	border-bottom: 1px solid ${getColor('#cccccc')};

	:last-child {
		border-bottom: none;
	}
`

export const Button = styled.button`
	${flexCenterDirection()}
	justify-content: space-between;

	width: 100%;
	height: 100%;
	padding: 10px;

	background: transparent;
	color: ${getColor('black')};

	cursor: pointer;
	transition:
		background var(--hover-effect),
		color var(--hover-effect);

	:hover,
	:focus {
		background: ${getColor('yellow')};
		color: 'black';
	}
`
