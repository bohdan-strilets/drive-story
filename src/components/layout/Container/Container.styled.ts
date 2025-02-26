import styled from '@emotion/styled'

import { breakpoints } from '@/styles/media/breakpoints'

export const Wrapper = styled.div`
	margin: 0 auto;
	max-width: 320px;

	@media screen and (min-width: ${breakpoints.tabletMin}) {
		max-width: ${breakpoints.tabletMin};
	}

	@media screen and (min-width: ${breakpoints.laptopMin}) {
		max-width: ${breakpoints.laptopMin};
	}

	@media screen and (min-width: ${breakpoints.desktopMin}) {
		max-width: ${breakpoints.desktopMin};
	}
`
