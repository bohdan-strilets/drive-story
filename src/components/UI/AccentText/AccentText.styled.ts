import styled from '@emotion/styled'

import { TextProps } from '@/types/props/UI/AccentTextProps'

import { getColor } from '@/styles/helpers/getColor'

export const Text = styled.span<TextProps>`
	font-weight: ${({ fontWeight }) => fontWeight};
	font-size: ${({ fontSize }) => `${fontSize}px`};

	margin: ${({ margin }) => margin};

	color: ${({ color }) => getColor(color)};
`
