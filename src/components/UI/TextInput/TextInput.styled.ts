import styled from '@emotion/styled'

import { InputProps, WrapperProps } from '@/types/props/UI/TextInputProps'

import { getColor } from '@/styles/helpers/getColor'
import { breakpoints } from '@/styles/media/breakpoints'

export const Wrapper = styled.label<WrapperProps>`
	display: block;

	width: ${({ width }) => width};
	margin: ${({ margin }) => margin};
`

export const InputContainer = styled.div`
	position: relative;
	width: 100%;
`

export const Input = styled.input<InputProps>`
	width: 100%;
	height: ${({ height }) => (height ? height : '30px')};
	padding: ${({ padding }) => (padding ? padding : '0 10px')};
	margin: 5px 0;

	font-size: 14px;

	background-color: ${getColor('#e4e4e4')};
	color: ${getColor('black')};
	border-radius: 3px;
	border-bottom: 2px solid transparent;

	transition: border-bottom-color var(--hover-effect);

	::placeholder {
		color: ${getColor('#bdbdbd')};
	}

	:focus {
		border-bottom-color: ${getColor('green')};
	}

	::-ms-reveal,
	::-ms-clear {
		display: none;
	}

	@media screen and (min-width: ${breakpoints.tabletMin}) {
		height: ${({ height }) => (height ? height : '35px')};
		font-size: 16px;
	}

	@media screen and (min-width: ${breakpoints.laptopMin}) {
		height: ${({ height }) => (height ? height : '40px')};
	}
`
