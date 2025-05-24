import { css } from '@emotion/react'

import { breakpoints } from '../media/breakpoints'

import { flexCenterDirection } from './flexCenterDirection'

export const itemInformationContainer = () => css`
	@media screen and (min-width: ${breakpoints.laptopMin}) {
		${flexCenterDirection()}
		justify-content: space-between;
		align-items: start;
	}
`
