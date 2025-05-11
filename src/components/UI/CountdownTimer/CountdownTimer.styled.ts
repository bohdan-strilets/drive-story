import styled from '@emotion/styled'

import { flexCenterDirection } from '@/styles/mixins/flexCenterDirection'

export const Wrapper = styled.div`
	${flexCenterDirection()}
	padding: 10px;
`

export const Cell = styled.div`
	${flexCenterDirection()}

	margin-right: 15px;

	font-weight: 600;
	text-transform: uppercase;

	:last-child {
		margin-right: 0;
	}
`
