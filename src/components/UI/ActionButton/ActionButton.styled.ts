import styled from '@emotion/styled'

import {
	ButtonProps,
	IconWrapperProps,
	LabelProps,
} from '@/types/props/UI/ActionButtonProps'

import { getColor } from '@/styles/helpers/getColor'
import { flexCenterDirection } from '@/styles/mixins/flexCenterDirection'

export const Button = styled.button<ButtonProps>`
	width: ${({ width }) => width};
	height: ${({ height }) => height};

	border-radius: 5px;
	background: var(--green-gradient);
	background-color: ${getColor('green')};
	margin: ${({ margin }) => margin};

	text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);

	cursor: pointer;

	:hover .icon,
	:focus .icon,
	:hover p,
	:focus p {
		color: ${getColor('white')};
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

	color: ${getColor('black')};
	transition: color var(--hover-effect);
`

export const Label = styled.p<LabelProps>`
	text-transform: uppercase;
	font-size: ${({ labelSize }) => labelSize};
	font-weight: 900;

	color: ${getColor('black')};
	transition: color var(--hover-effect);
`
