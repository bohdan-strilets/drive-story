import styled from '@emotion/styled'

import { ButtonStyledProps } from '@/types/props/UI/ButtonProps'

import { getColor } from '@/styles/helpers/getColor'
import { breakpoints } from '@/styles/media/breakpoints'
import { flexCenterDirection } from '@/styles/mixins/flexCenterDirection'

export const StyledButton = styled.button<ButtonStyledProps>`
	${flexCenterDirection()}

	padding: ${({ padding }) => (padding ? padding : '0 25px')};
	height: ${({ height }) => (height ? height : '30px')};
	width: ${({ width }) => width};
	margin: ${({ margin }) => margin};

	font-size: 13px;
	font-weight: 500;
	text-transform: uppercase;

	border-radius: 5px;
	background-color: ${({ background }) => getColor(background)};
	color: ${({ color }) => getColor(color)};
	box-shadow: ${({ isShadow }) => isShadow && 'var(--box-shadow)'};
	text-shadow: var(--text-shadow);

	cursor: pointer;
	transition:
		background-color var(--hover-effect),
		color var(--hover-effect);

	:hover,
	:focus {
		background-color: ${({ hoverBackground }) => getColor(hoverBackground)};
		color: ${({ hoverColor }) => getColor(hoverColor)};
	}

	:active {
		transform: scale(0.99);
	}

	@media screen and (min-width: ${breakpoints.tabletMin}) {
		height: ${({ height }) => (height ? height : '35px')};
		font-size: 14px;
	}

	@media screen and (min-width: ${breakpoints.laptopMin}) {
		height: ${({ height }) => (height ? height : '40px')};
		font-size: 16px;
	}
`
