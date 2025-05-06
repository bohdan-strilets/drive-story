import styled from '@emotion/styled'

import { WrapperProps } from '@/types/props/UI/DatePickerProps'

import { getColor } from '@/styles/helpers/getColor'
import { breakpoints } from '@/styles/media/breakpoints'
import { flexCenterDirection } from '@/styles/mixins/flexCenterDirection'

export const Wrapper = styled.div<WrapperProps>`
	position: relative;

	width: ${({ width }) => width};
	margin: ${({ margin }) => margin};
`

export const CustomInput = styled.button`
	${flexCenterDirection()}
	justify-content: space-between;

	width: 100%;
	height: 30px;
	padding: 0 10px;
	margin: 5px 0;

	font-size: 14px;

	background-color: ${getColor('#e4e4e4')};
	color: ${getColor('black')};
	border-radius: 3px;
	border-bottom: 2px solid transparent;

	cursor: pointer;
	transition: border-bottom-color var(--hover-effect);

	:hover,
	:focus {
		border-bottom-color: ${getColor('green')};
	}

	@media screen and (min-width: ${breakpoints.tabletMin}) {
		height: 35px;
		font-size: 16px;
	}

	@media screen and (min-width: ${breakpoints.laptopMin}) {
		height: 40px;
	}
`
