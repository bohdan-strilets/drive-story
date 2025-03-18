import styled from '@emotion/styled'

import { breakpoints } from '@/styles/media/breakpoints'
import { flexCenterDirection } from '@/styles/mixins/flexCenterDirection'

export const List = styled.ul`
	@media screen and (min-width: ${breakpoints.tabletMin}) {
		${flexCenterDirection()}
		justify-content: space-evenly;
	}
`

export const Item = styled.li`
	width: 100%;
	height: auto;
	margin-bottom: 15px;

	:last-child {
		margin-bottom: 0;
	}

	@media screen and (min-width: ${breakpoints.tabletMin}) {
		margin-bottom: 0;
		width: 220px;
	}

	@media screen and (min-width: ${breakpoints.laptopMin}) {
		width: 300px;
	}
`
