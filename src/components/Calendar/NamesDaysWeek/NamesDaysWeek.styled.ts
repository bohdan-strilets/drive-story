import styled from '@emotion/styled'

import { getColor } from '@/styles/helpers/getColor'
import { breakpoints } from '@/styles/media/breakpoints'
import { flexCenterDirection } from '@/styles/mixins/flexCenterDirection'

export const List = styled.ul`
	${flexCenterDirection()}
	margin-bottom: 5px;
`

export const Item = styled.li`
	${flexCenterDirection()}

	font-size: 12px;

	width: 100%;
	height: 40px;

	background-color: ${getColor('yellow')};

	@media screen and (min-width: ${breakpoints.tabletMin}) {
		font-size: 16px;
	}
`

export const Label = styled.p`
	font-weight: 600;
	color: ${getColor('black')};

	::first-letter {
		text-transform: uppercase;
	}
`
