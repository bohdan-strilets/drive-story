import styled from '@emotion/styled'

import { getColor } from '@/styles/helpers/getColor'
import { breakpoints } from '@/styles/media/breakpoints'
import { flexCenterDirection } from '@/styles/mixins/flexCenterDirection'

export const Name = styled.p`
	text-transform: uppercase;
	font-size: 20px;
	font-weight: 900;

	color: ${getColor('white')};

	@media screen and (min-width: ${breakpoints.tabletMin}) {
		font-size: 44px;
	}
`

export const ShortName = styled.p`
	font-weight: 700;
	font-size: 16px;

	color: ${getColor('white')};

	@media screen and (min-width: ${breakpoints.tabletMin}) {
		font-size: 24px;
	}
`

export const Container = styled.div`
	${flexCenterDirection()}
	justify-content: space-between;
	align-items: start;
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

export const WarnList = styled.ul`
	${flexCenterDirection()}
	justify-content: space-between;

	margin-bottom: 15px;
`

export const WarnItem = styled.li`
	${flexCenterDirection('column')}

	width: 33%;
	padding: 15px;

	background-color: ${getColor('yellow')};
	border-radius: 5px;
	box-shadow: var(--box-shadow);
`
