import styled from '@emotion/styled'

import { FirstLetterProps } from '@/types/props/UI/InitialAvatarProps'

import { getColor } from '@/styles/helpers/getColor'
import { flexCenterDirection } from '@/styles/mixins/flexCenterDirection'

export const FirstLetter = styled.div<FirstLetterProps>`
	${flexCenterDirection()}

	font-size: ${({ fontSize }) => `${fontSize}px`};
	font-weight: 700;
	text-transform: uppercase;

	width: ${({ width }) => width};
	height: ${({ height }) => height};
	margin: ${({ margin }) => margin};

	color: ${getColor('white')};
	background-color: ${({ background }) => background};
	box-shadow: var(--box-shadow);
`
