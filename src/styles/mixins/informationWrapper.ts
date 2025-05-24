import { css } from '@emotion/react'

import { breakpoints } from '../media/breakpoints'

export const informationWrapper = () => css`
	width: 100%;
	margin-bottom: 30px;

	@media screen and (min-width: ${breakpoints.laptopMin}) {
		width: 65%;
		margin-bottom: 0;
	}

	@media screen and (min-width: ${breakpoints.desktopMin}) {
		width: 70%;
	}
`
