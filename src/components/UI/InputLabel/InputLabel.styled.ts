import styled from '@emotion/styled'

import { getColor } from '@/styles/helpers/getColor'
import { breakpoints } from '@/styles/media/breakpoints'

export const Label = styled.p`
	font-size: 14px;
	font-weight: 500;

	color: ${getColor('gray')};

	@media screen and (min-width: ${breakpoints.tabletMin}) {
		font-size: 16px;
	}
`

export const Required = styled.span`
	margin-left: 5px;
	color: ${getColor('red')};
`
