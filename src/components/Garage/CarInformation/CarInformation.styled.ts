import styled from '@emotion/styled'

import { breakpoints } from '@/styles/media/breakpoints'
import { flexCenterDirection } from '@/styles/mixins/flexCenterDirection'

export const Container = styled.div`
	margin-top: 15px;

	@media screen and (min-width: ${breakpoints.laptopMin}) {
		${flexCenterDirection()}
		justify-content: space-between;
		align-items: start;
	}
`

export const InformationWrapper = styled.div`
	width: 100%;
	margin-bottom: 30px;

	@media screen and (min-width: ${breakpoints.laptopMin}) {
		width: 65%;
		margin-bottom: 0;
	}

	@media screen and (min-width: ${breakpoints.desktopMin}) {
		width: 70%;
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
