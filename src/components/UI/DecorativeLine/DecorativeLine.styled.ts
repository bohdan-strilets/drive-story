import styled from '@emotion/styled'

import { LineProps } from '@/types/props/UI/DecorativeLineProps'

import { getColor } from '@/styles/helpers/getColor'

export const Line = styled.div<LineProps>`
	width: ${({ width }) => width};
	margin: ${({ margin }) => margin};

	border-bottom: ${({ type }) => type};
	border-width: ${({ height }) => `${height}px`};
	border-color: ${({ color }) => `${getColor(color as string)}`};
`
