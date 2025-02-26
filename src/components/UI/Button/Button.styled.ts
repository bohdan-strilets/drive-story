import styled from '@emotion/styled'

import { ButtonStyledProps } from '@/types/props/UI/ButtonProps'

import { getButtonColor } from '@/styles/helpers/getButtonColor'
import { getColor } from '@/styles/helpers/getColor'
import { breakpoints } from '@/styles/media/breakpoints'
import { flexCenterDirection } from '@/styles/mixins/flexCenterDirection'

export const StyledButton = styled.button<ButtonStyledProps>`
	${flexCenterDirection()}

	padding: 0 25px;
	height: 30px;
	width: ${({ width }) => width};
	margin: ${({ margin }) => margin};

	font-size: 13px;
	font-weight: 500;
	text-transform: uppercase;

	border-radius: 5px;
	background-color: ${({ variant }) => getColor(variant)};
	color: ${({ variant }) => getButtonColor(variant, 'default')};
	box-shadow: var(--box-shadow);
	text-shadow: var(--text-shadow);

	cursor: pointer;
	transition: background-color var(--hover-effect);

	:hover,
	:focus {
		background-color: ${({ variant }) =>
			variant === 'gray' ? getColor('yellow') : getColor('gray')};
		color: ${({ variant }) => getButtonColor(variant, 'hover')};
	}

	:active {
		transform: scale(0.99);
	}

	@media screen and (min-width: ${breakpoints.tabletMin}) {
		height: 35px;
		font-size: 14px;
	}

	@media screen and (min-width: ${breakpoints.laptopMin}) {
		height: 40px;
		font-size: 15px;
	}
`
