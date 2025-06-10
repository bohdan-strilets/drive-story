import styled from '@emotion/styled'

import { getColor } from '@/styles/helpers/getColor'
import { breakpoints } from '@/styles/media/breakpoints'

export const Button = styled.button`
	position: absolute;
	top: 40%;
	right: 10px;
	transform: translateY(-50%);

	font-size: 16px;

	background-color: transparent;
	color: ${getColor('gray')};

	cursor: pointer;
	transition: color var(--hover-effect);

	:hover,
	:focus {
		color: ${getColor('yellow')};
	}

	@media screen and (min-width: ${breakpoints.tabletMin}) {
		font-size: 18px;
	}

	@media screen and (min-width: ${breakpoints.laptopMin}) {
		font-size: 20px;
	}
`
