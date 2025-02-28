import styled from '@emotion/styled'

import { getColor } from '@/styles/helpers/getColor'

export const Button = styled.button`
	position: absolute;
	top: 25px;
	right: 35px;

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
