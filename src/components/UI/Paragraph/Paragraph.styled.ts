import styled from '@emotion/styled'

import { TextProps } from '@/types/props/UI/ParagraphProps'

import { getColor } from '@/styles/helpers/getColor'

export const Text = styled.p<TextProps>`
	font-size: ${({ fontSize }) => fontSize};
	font-weight: ${({ fontWeight }) => fontWeight};
	line-height: ${({ lineHeight }) => lineHeight};
	text-align: ${({ textAlign }) => textAlign};

	margin: ${({ margin }) => margin};
	padding: ${({ padding }) => padding};

	color: ${({ color }) => getColor(color)};
	background-color: ${({ background }) => getColor(background)};
`
