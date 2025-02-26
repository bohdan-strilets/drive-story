import styled from '@emotion/styled'

import { breakpoints } from '@/styles/media/breakpoints'

export const Main = styled.main`
	padding: 10px;

	@media screen and (min-width: ${breakpoints.tabletMin}) {
		padding: 15px;
	}
`
