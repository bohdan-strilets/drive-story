import styled from '@emotion/styled'

import { getColor } from '@/styles/helpers/getColor'
import { breakpoints } from '@/styles/media/breakpoints'

export const Wrapper = styled.div`
	position: absolute;
	top: 0;
	right: 0;
	z-index: 99;

	padding: 2px 8px;

	background-color: ${getColor('red')};
	border-bottom-left-radius: 15px;
	box-shadow: var(--box-shadow);
	border-bottom: 2px solid ${getColor('black')};

	@media screen and (min-width: ${breakpoints.tabletMin}) {
		padding: 5px 20px;
	}
`

export const Label = styled.p`
	font-weight: 700;
	font-size: 10px;
	text-transform: uppercase;

	color: ${getColor('white')};

	@media screen and (min-width: ${breakpoints.tabletMin}) {
		font-size: 14px;
	}
`
