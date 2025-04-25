import styled from '@emotion/styled'

import { getColor } from '@/styles/helpers/getColor'
import { breakpoints } from '@/styles/media/breakpoints'

export const Wrapper = styled.div`
	margin-bottom: 40px;
`

export const FullName = styled.p`
	text-transform: uppercase;
	font-size: 20px;
	font-weight: 900;

	color: ${getColor('white')};

	@media screen and (min-width: ${breakpoints.tabletMin}) {
		font-size: 44px;
	}
`

export const Nickname = styled.p`
	font-weight: 700;
	font-size: 16px;

	color: ${getColor('white')};

	@media screen and (min-width: ${breakpoints.tabletMin}) {
		font-size: 24px;
	}
`
