import styled from '@emotion/styled'

import { breakpoints } from '@/styles/media/breakpoints'

export const Wrapper = styled.div`
	width: 100%;
	margin: 0 auto;

	@media screen and (min-width: ${breakpoints.tabletMin}) {
		width: 70%;
	}
`

export const Text = styled.p`
	margin: 15px 0;
`
