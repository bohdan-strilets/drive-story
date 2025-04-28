import styled from '@emotion/styled'

import { ButtonProps } from '@/types/props/UI/ButtonGoBackProps'

import { getColor } from '@/styles/helpers/getColor'
import { breakpoints } from '@/styles/media/breakpoints'
import { flexCenterDirection } from '@/styles/mixins/flexCenterDirection'

export const Button = styled.button<ButtonProps>`
	${flexCenterDirection()}
	justify-content: start;

	width: 100%;
	height: 30px;
	margin: ${({ margin }) => margin};

	color: ${({ color }) => `${getColor(color as string)}`};
	background-color: transparent;

	cursor: pointer;
	transition: color var(--hover-effect);

	:hover,
	:focus {
		color: ${getColor('black')};
	}

	@media screen and (min-width: ${breakpoints.tabletMin}) {
		height: 40px;
	}
`

export const Label = styled.p`
	font-weight: 500;
	margin-left: 10px;
`
