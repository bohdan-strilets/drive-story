import { css } from '@emotion/react'

import { breakpoints } from '../media/breakpoints'

export const sideMenuWrapper = () => css`
	width: 100%;

	@media screen and (min-width: ${breakpoints.laptopMin}) {
		width: 31%;
	}

	@media screen and (min-width: ${breakpoints.desktopMin}) {
		width: 25%;
	}
`
