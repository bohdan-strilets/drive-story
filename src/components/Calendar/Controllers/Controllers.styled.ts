import styled from '@emotion/styled'

import { breakpoints } from '@/styles/media/breakpoints'
import { flexCenterDirection } from '@/styles/mixins/flexCenterDirection'

export const Wrapper = styled.div`
	margin-bottom: 15px;

	@media screen and (min-width: ${breakpoints.tabletMin}) {
		${flexCenterDirection()}
		justify-content: space-between;
	}
`

export const Group = styled.div`
	@media screen and (min-width: ${breakpoints.tabletMin}) {
		${flexCenterDirection()}
	}
`
