import styled from '@emotion/styled'

import { breakpoints } from '@/styles/media/breakpoints'
import { flexCenterDirection } from '@/styles/mixins/flexCenterDirection'

export const Wrapper = styled.div`
	${flexCenterDirection('column')}
`

export const Group = styled.div`
	${flexCenterDirection()}
`

export const Dot = styled.div`
	width: 4px;
	height: 4px;

	background-color: currentColor;
	border-radius: 50%;

	@media screen and (min-width: ${breakpoints.tabletMin}) {
		width: 6px;
		height: 6px;
	}
`
