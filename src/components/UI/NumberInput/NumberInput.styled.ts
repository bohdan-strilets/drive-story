import styled from '@emotion/styled'

import { WrapperProps } from '@/types/props/UI/NumberInputProps'
import { InputProps } from '@/types/props/UI/TextInputProps'

import { getColor } from '@/styles/helpers/getColor'
import { breakpoints } from '@/styles/media/breakpoints'
import { flexCenterDirection } from '@/styles/mixins/flexCenterDirection'

export const Wrapper = styled.label<WrapperProps>`
	display: block;

	width: ${({ width }) => width};
	margin: ${({ margin }) => margin};
`

export const InputContainer = styled.div`
	${flexCenterDirection()}
`

export const Controllers = styled.ul`
	${flexCenterDirection()}
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

	::-webkit-inner-spin-button,
	::-webkit-outer-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}

	appearance: none;
	-moz-appearance: textfield;

	@media screen and (min-width: ${breakpoints.tabletMin}) {
		height: ${({ height }) => (height ? height : '35px')};
		font-size: 16px;
	}

	@media screen and (min-width: ${breakpoints.laptopMin}) {
		height: ${({ height }) => (height ? height : '40px')};
	}
`

export const ThresholdContainer = styled.div`
	${flexCenterDirection()}
	justify-content: space-between;
	font-size: 10px;
`

export const ThresholdValue = styled.p`
	${flexCenterDirection()}
	display: inline-flex;

	padding: 0 3px;
	max-width: 100px;
	height: 20px;

	color: ${getColor('black')};
	background-color: ${getColor('#e4e4e4')};
	border-radius: 3px;
`
