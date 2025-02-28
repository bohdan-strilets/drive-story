import styled from '@emotion/styled'
import { Link } from 'react-router-dom'

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

export const StyledLink = styled(Link)`
	font-size: 14px;

	transition: color var(--hover-effect);
	text-align: right;

	:hover,
	:focus {
		color: var(--black-color);
	}
`
