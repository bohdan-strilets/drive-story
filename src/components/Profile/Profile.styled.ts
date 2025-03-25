import styled from '@emotion/styled'

import { breakpoints } from '@/styles/media/breakpoints'
import { flexCenterDirection } from '@/styles/mixins/flexCenterDirection'

export const Information = styled.div`
	@media screen and (min-width: ${breakpoints.laptopMin}) {
		${flexCenterDirection()}
		justify-content: space-between;
		align-items: start;
	}
`

export const SideMenu = styled.div`
	width: 100%;

	@media screen and (min-width: ${breakpoints.laptopMin}) {
		width: 31%;
	}

	@media screen and (min-width: ${breakpoints.desktopMin}) {
		width: 25%;
	}
`
