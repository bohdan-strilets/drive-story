import styled from '@emotion/styled'

import { ButtonProps } from '@/types/props/UI/CloseBtnProps'

import { getColor } from '@/styles/helpers/getColor'

export const Button = styled.button<ButtonProps>`
	position: absolute;
	top: ${({ position }) => position.top && position.top};
	bottom: ${({ position }) => position.bottom && position.bottom};
	right: ${({ position }) => position.right && position.right};
	left: ${({ position }) => position.left && position.left};

	font-size: 24px;

	width: 40px;
	height: 40px;

	background-color: transparent;
	color: ${getColor('yellow')};

	cursor: pointer;
	transition: color var(--hover-effect);

	:hover,
	:focus {
		color: ${getColor('gray')};
	}

	:active {
		transform: scale(0.99);
	}
`
