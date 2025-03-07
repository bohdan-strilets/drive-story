import styled from '@emotion/styled'

import { getColor } from '@/styles/helpers/getColor'

export const Button = styled.button`
	position: absolute;
	top: 50%;
	right: 10px;
	transform: translateY(-50%);

	font-size: 20px;

	background-color: transparent;
	color: ${getColor('gray')};

	cursor: pointer;
	transition: color var(--hover-effect);

	:hover,
	:focus {
		color: ${getColor('yellow')};
	}
`
