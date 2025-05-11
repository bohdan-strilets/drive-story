import styled from '@emotion/styled'

import { breakpoints } from '@/styles/media/breakpoints'
import { flexCenterDirection } from '@/styles/mixins/flexCenterDirection'

export const Wrapper = styled.div`
	padding: 10px;

	@media screen and (min-width: ${breakpoints.tabletMin}) {
		${flexCenterDirection()}
	}
`

export const Cell = styled.div`
	${flexCenterDirection()}

	margin-right: 15px;
	min-width: 140px;

	font-weight: 600;
	text-transform: uppercase;

	:last-child {
		margin-right: 0;
	}
`
