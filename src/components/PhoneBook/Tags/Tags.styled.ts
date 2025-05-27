import styled from '@emotion/styled'

import { flexCenterDirection } from '@/styles/mixins/flexCenterDirection'

export const Wrapper = styled.div`
	${flexCenterDirection()}
	justify-content: start;
`

export const List = styled.ul`
	${flexCenterDirection()}
	flex-wrap: wrap;
	justify-content: start;
`

export const Item = styled.li`
	margin-right: 3px;
	margin-bottom: 3px;

	:last-child {
		margin-right: 0;
	}
`

export const Label = styled.p`
	text-transform: uppercase;
`
