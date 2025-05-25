import styled from '@emotion/styled'

import { FirstLetterProps } from '@/types/props/UI/InitialAvatarProps'

import { getColor } from '@/styles/helpers/getColor'
import { breakpoints } from '@/styles/media/breakpoints'
import { flexCenterDirection } from '@/styles/mixins/flexCenterDirection'

export const FirstLetter = styled.div<FirstLetterProps>`
	${flexCenterDirection()}

	font-size: 28px;
	font-weight: 700;
	text-transform: uppercase;

	width: 50px;
	height: 50px;
	margin-right: 15px;

	color: ${getColor('white')};
	background-color: ${({ background }) => background};
	box-shadow: var(--box-shadow);

	@media screen and (min-width: ${breakpoints.laptopMin}) {
		width: 80px;
		height: 80px;

		font-size: 42px;
	}
`
