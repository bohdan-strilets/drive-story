import { css } from '@emotion/react'

import { breakpoints } from '../media/breakpoints'

export const cardGridItem = (gap: string = '5px') => css`
	flex: 1 1 100%;
	box-sizing: border-box;

	max-width: 100%;
	height: 240px;

	@media screen and (min-width: ${breakpoints.tabletMin}) {
		flex: 1 1 calc(50% - ${gap});
		max-width: calc(50% - ${gap});
	}

	@media screen and (min-width: ${breakpoints.laptopMin}) {
		flex: 1 1 calc(33% - ${gap});
		max-width: calc(33% - ${gap});
	}
`
