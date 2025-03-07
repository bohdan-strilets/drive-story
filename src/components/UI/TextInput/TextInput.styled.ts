import styled from '@emotion/styled'

import { InputProps, WrapperProps } from '@/types/props/UI/TextInputProps'

import { getColor } from '@/styles/helpers/getColor'
import { breakpoints } from '@/styles/media/breakpoints'

export const Wrapper = styled.label<WrapperProps>`
	display: block;

	width: ${({ width }) => width};
	margin: ${({ margin }) => margin};
`

export const Label = styled.p`
	font-size: 14px;
	font-weight: 500;

	color: ${getColor('gray')};

	@media screen and (min-width: ${breakpoints.tabletMin}) {
		font-size: 16px;
	}
`

export const Required = styled.span`
	margin-left: 5px;
	color: ${getColor('red')};
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

	@media screen and (min-width: ${breakpoints.tabletMin}) {
		height: ${({ height }) => (height ? height : '35px')};
		font-size: 16px;
	}

	@media screen and (min-width: ${breakpoints.laptopMin}) {
		height: ${({ height }) => (height ? height : '40px')};
	}
`

export const ErrorMsg = styled.p`
	font-size: 12px;
	color: ${getColor('red')};

	@media screen and (min-width: ${breakpoints.tabletMin}) {
		font-size: 14px;
	}

	@media screen and (min-width: ${breakpoints.desktopMin}) {
		font-size: 16px;
	}
`
