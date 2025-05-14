import styled from '@emotion/styled'

import { flexCenterDirection } from '@/styles/mixins/flexCenterDirection'

export const List = styled.ul`
	${flexCenterDirection()}
	justify-content: space-between;
`

export const Item = styled.li`
	width: 49%;
`
