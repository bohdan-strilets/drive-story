import styled from '@emotion/styled'
import { motion } from 'framer-motion'

import {
	CustomCheckboxProps,
	WrapperProps,
} from '@/types/props/UI/CheckboxProps'

import { getColor } from '@/styles/helpers/getColor'
import { breakpoints } from '@/styles/media/breakpoints'
import { flexCenterDirection } from '@/styles/mixins/flexCenterDirection'

export const Wrapper = styled.div<WrapperProps>`
	margin: ${({ margin }) => margin};
`

export const HiddenInput = styled.input`
	position: absolute;
	width: 1px;
	height: 1px;
	margin: -1px;
	border: 0;
	padding: 0;
	clip: rect(0 0 0 0);
	overflow: hidden;

	:focus + .checkbox {
		outline: 3px solid ${getColor('rgba(109, 109, 109, 0.3)')};
	}
`

export const Container = styled.div`
	${flexCenterDirection()}
	justify-content: start;

	cursor: pointer;
`

export const CustomCheckbox = styled(motion.div)<CustomCheckboxProps>`
	${flexCenterDirection()}

	min-width: 20px;
	height: 20px;
	margin-right: 10px;

	color: ${getColor('white')};
	background-color: ${({ isChecked }) => isChecked && getColor('yellow')};
	border: 2px solid ${getColor('yellow')};
	border-radius: 3px;

	opacity: ${({ disabled }) => (disabled ? 0.3 : 1)};

	@media screen and (min-width: ${breakpoints.tabletMin}) {
		min-width: 22px;
		height: 22px;
	}

	@media screen and (min-width: ${breakpoints.laptopMin}) {
		min-width: 24px;
		height: 24px;
	}
`

export const ErrorMsg = styled.p`
	font-weight: 600;
	margin-top: 5px;
	color: ${getColor('red')};
`
