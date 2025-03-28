import styled from '@emotion/styled'

import { getColor } from '@/styles/helpers/getColor'
import { breakpoints } from '@/styles/media/breakpoints'

export const Cell = styled.button<{ currentDate: boolean }>`
	width: 100%;
	height: 100%;

	font-weight: 600;
	font-size: 12px;

	border-radius: 3px;
	background: ${({ currentDate }) =>
		currentDate ? `${getColor('yellow')}` : 'white'};

	cursor: pointer;
	transition: background var(--hover-effect);

	:hover,
	:focus {
		background: ${getColor('#cccccc')};
	}

	@media screen and (min-width: ${breakpoints.tabletMin}) {
		font-size: 16px;
	}
`
