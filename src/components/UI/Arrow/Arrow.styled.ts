import styled from '@emotion/styled'

import { WrapperProps } from '@/types/props/UI/ArrowProps'

import { getColor } from '@/styles/helpers/getColor'
import { positionCoordinates } from '@/styles/mixins/positionCoordinates'

export const Wrapper = styled.div<WrapperProps>`
	position: absolute;
	${({ position }) => positionCoordinates(position)}
	transform: ${({ orientation }) =>
		`rotate(${orientation === 'horizontal' ? 0 : '90deg'})`};

	width: ${({ width }) => width};
	height: ${({ height }) => height};

	background-color: ${({ color }) => `${getColor(color)}`};

	::after {
		content: '';

		position: absolute;
		top: 50%;
		left: -10px;
		transform: translateY(-50%);

		width: 0;
		height: 0;

		border-top: 5px solid transparent;
		border-bottom: 5px solid transparent;
		border-right: 10px solid ${({ color }) => `${getColor(color)}`};
	}

	::before {
		content: '';

		position: absolute;
		top: 50%;
		right: -10px;
		transform: translateY(-50%);

		width: 0;
		height: 0;

		border-top: 5px solid transparent;
		border-bottom: 5px solid transparent;
		border-left: 10px solid ${({ color }) => `${getColor(color)}`};
	}
`

export const Value = styled.span`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);

	font-weight: 500;
	font-size: 12px;

	padding: 0 8px;

	background-color: ${getColor('white')};
`
