import styled from '@emotion/styled'

import { breakpoints } from '@/styles/media/breakpoints'
import { flexCenterDirection } from '@/styles/mixins/flexCenterDirection'

export const Wrapper = styled.div`
	${flexCenterDirection()}
	padding: 10px;
`

export const Cell = styled.div`
	${flexCenterDirection('column')}

	font-weight: 600;
	text-transform: uppercase;

	min-width: 70px;

	@media screen and (min-width: ${breakpoints.tabletMin}) {
		flex-direction: row;

		min-width: 140px;
		margin-right: 15px;
	}

	:last-child {
		margin-right: 0;
	}
`

export const Label = styled.p`
	font-size: 10px;

	@media screen and (min-width: ${breakpoints.tabletMin}) {
		font-size: 14px;
		margin-left: 10px;
	}
`
