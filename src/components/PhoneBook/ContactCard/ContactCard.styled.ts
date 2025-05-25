import styled from '@emotion/styled'

import { breakpoints } from '@/styles/media/breakpoints'
import { flexCenterDirection } from '@/styles/mixins/flexCenterDirection'

export const Wrapper = styled.div`
	@media screen and (min-width: ${breakpoints.tabletMin}) {
		${flexCenterDirection()}
		justify-content: space-between;
	}
`

export const NameContainer = styled.div`
	${flexCenterDirection()}
	justify-content: start;

	width: 100%;
	margin-bottom: 10px;

	@media screen and (min-width: ${breakpoints.tabletMin}) {
		margin-bottom: 0;
		width: 50%;
	}
`

export const InfoContainer = styled.div`
	${flexCenterDirection('column')}
	align-items: start;
	width: 100%;

	@media screen and (min-width: ${breakpoints.tabletMin}) {
		margin-bottom: 0;
		width: 40%;
	}
`

export const IconWithText = styled.div`
	${flexCenterDirection()}
	justify-content: start;
`
