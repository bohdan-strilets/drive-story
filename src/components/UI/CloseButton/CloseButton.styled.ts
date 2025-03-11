import styled from '@emotion/styled'

import { ButtonProps } from '@/types/props/UI/CloseButtonProps'

import { getColor } from '@/styles/helpers/getColor'
import { positionCoordinates } from '@/styles/mixins/positionCoordinates'

export const Button = styled.button<ButtonProps>`
	position: absolute;
	${({ position }) => positionCoordinates(position)}

	font-size: 24px;

	width: 40px;
	height: 40px;

	background-color: transparent;
	color: ${({ color }) => `${getColor(color)}`};

	cursor: pointer;
	transition: color var(--hover-effect);

	:hover,
	:focus {
		color: ${({ hoverColor }) => `${getColor(hoverColor)}`};
	}

	:active {
		transform: scale(0.99);
	}
`
