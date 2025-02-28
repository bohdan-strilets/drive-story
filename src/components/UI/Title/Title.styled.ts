import styled from '@emotion/styled'

import { StyledTitleProps } from '@/types/props/UI/TitleProps'

import { getColor } from '@/styles/helpers/getColor'

export const StyledTitle = styled.h1<StyledTitleProps>`
	font-weight: 900;
	text-transform: uppercase;
	font-size: ${({ fontSize }) => `${fontSize}px`};
	text-align: ${({ textAlign }) => textAlign};

	width: 100%;
	margin: ${({ margin }) => margin};

	color: ${({ variant }) => `${getColor(variant)}`};
`
