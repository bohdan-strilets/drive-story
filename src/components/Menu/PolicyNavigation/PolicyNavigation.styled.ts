import styled from '@emotion/styled'

import { breakpoints } from '@/styles/media/breakpoints'
import { flexCenterDirection } from '@/styles/mixins/flexCenterDirection'

export const List = styled.ul`
	${flexCenterDirection()}

	@media screen and (min-width: ${breakpoints.tabletMin}) {
		justify-content: end;
	}
`

export const Item = styled.li`
	${flexCenterDirection()}

	margin-right: 10px;

	:last-child {
		margin-right: 0;
	}
`
