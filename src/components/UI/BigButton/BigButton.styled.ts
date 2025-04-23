import styled from '@emotion/styled'

import {
	ButtonProps,
	IconWrapperProps,
	LabelProps,
} from '@/types/props/UI/BigButtonProps'

import { getColor } from '@/styles/helpers/getColor'
import { flexCenterDirection } from '@/styles/mixins/flexCenterDirection'

export const Button = styled.button<ButtonProps>`
	width: ${({ width }) => width};
	height: ${({ height }) => height};

	border-radius: 5px;
	background-color: ${getColor('gray')};
	margin: ${({ margin }) => margin};

	cursor: pointer;

	:hover .icon,
	:focus .icon,
	:hover p,
	:focus p {
		color: ${getColor('black')};
	}

	:active {
		transform: scale(0.997);
	}
`

export const IconWrapper = styled.div<IconWrapperProps>`
	${flexCenterDirection()}
	width: 100%;
	height: 65%;
	font-size: ${({ iconSize }) => iconSize};

	color: ${getColor('white')};
	transition: color var(--hover-effect);
`

export const Label = styled.p<LabelProps>`
	text-transform: uppercase;
	font-size: ${({ labelSize }) => labelSize};
	font-weight: 900;

	color: ${getColor('white')};
	transition: color var(--hover-effect);
`
