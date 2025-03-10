import styled from '@emotion/styled'

import { ButtonProps } from '@/types/props/UI/ButtonAsLinkProps'

import { getColor } from '@/styles/helpers/getColor'

export const Button = styled.button<ButtonProps>`
	display: inline-block;

	text-decoration: underline;

	margin: ${({ margin }) => margin};

	color: ${({ color }) => `${getColor(color)}`};
	background-color: transparent;

	cursor: pointer;
	transition: color var(--hover-effect);

	:hover,
	:focus {
		color: ${({ hoverColor }) => `${getColor(hoverColor)}`};
	}
`
