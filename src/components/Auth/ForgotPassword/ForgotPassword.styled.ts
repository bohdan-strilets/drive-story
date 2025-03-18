import styled from '@emotion/styled'

import { breakpoints } from '@/styles/media/breakpoints'

export const Text = styled.p`
	margin-bottom: 15px;

	@media screen and (min-width: ${breakpoints.tabletMin}) {
		margin-bottom: 20px;
	}

	@media screen and (min-width: ${breakpoints.laptopMin}) {
		margin-bottom: 25px;
	}
`
