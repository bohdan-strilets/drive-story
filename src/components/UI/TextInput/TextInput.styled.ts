import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { IMaskInput } from 'react-imask'

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

export const baseInputStyles = css`
	width: 100%;
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
		font-size: 16px;
	}
`

export const Input = styled.input<InputProps>`
	${baseInputStyles}
	height: ${({ height }) => (height ? height : '30px')};
	padding: ${({ padding }) => (padding ? padding : '0 10px')};

	@media screen and (min-width: ${breakpoints.tabletMin}) {
		height: ${({ height }) => (height ? height : '35px')};
	}

	@media screen and (min-width: ${breakpoints.laptopMin}) {
		height: ${({ height }) => (height ? height : '40px')};
	}
`

export const StyledIMaskInput = styled(IMaskInput)<InputProps>`
	${baseInputStyles}
	height: ${({ height }) => (height ? height : '30px')};
	padding: ${({ padding }) => (padding ? padding : '0 10px')};

	@media screen and (min-width: ${breakpoints.tabletMin}) {
		height: ${({ height }) => (height ? height : '35px')};
	}

	@media screen and (min-width: ${breakpoints.laptopMin}) {
		height: ${({ height }) => (height ? height : '40px')};
	}
`
