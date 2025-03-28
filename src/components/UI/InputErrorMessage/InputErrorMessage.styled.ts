import styled from '@emotion/styled'

import { getColor } from '@/styles/helpers/getColor'
import { breakpoints } from '@/styles/media/breakpoints'

export const Message = styled.p`
	font-size: 12px;
	color: ${getColor('red')};

	@media screen and (min-width: ${breakpoints.tabletMin}) {
		font-size: 14px;
	}

	@media screen and (min-width: ${breakpoints.desktopMin}) {
		font-size: 16px;
	}
`
