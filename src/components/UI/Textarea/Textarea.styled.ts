import styled from '@emotion/styled'

import { InputProps, WrapperProps } from '@/types/props/UI/TextareaProps'

import { getColor } from '@/styles/helpers/getColor'
import { breakpoints } from '@/styles/media/breakpoints'

export const Wrapper = styled.label<WrapperProps>`
	display: block;

	width: ${({ width }) => width};
	margin: ${({ margin }) => margin};
`

export const Input = styled.textarea<InputProps>`
	font-size: 14px;

	width: 100%;
	height: ${({ height }) => height};
	padding: ${({ padding }) => padding};

	background-color: ${getColor('#e4e4e4')};
	color: ${getColor('black')};
	border-radius: 3px;
	border-bottom: 2px solid transparent;

	transition: border-bottom-color var(--hover-effect);
	resize: none;

	::placeholder {
		color: ${getColor('#bdbdbd')};
	}

	:focus {
		border-bottom-color: ${getColor('green')};
	}

	@media screen and (min-width: ${breakpoints.tabletMin}) {
		font-size: 16px;
	}
`
