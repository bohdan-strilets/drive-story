import styled from '@emotion/styled'

import { breakpoints } from '@/styles/media/breakpoints'
import { flexCenterDirection } from '@/styles/mixins/flexCenterDirection'

export const Wrapper = styled.div`
	padding: 5px;

	@media screen and (min-width: ${breakpoints.tabletMin}) {
		${flexCenterDirection()}
		justify-content: space-between;
	}
`

export const List = styled.ul<{ margin?: string; width?: string }>`
	margin: ${({ margin }) => (margin ? margin : '')};
	width: ${({ width }) => (width ? width : '100%')};
`

export const Item = styled.li`
	${flexCenterDirection()}
	justify-content:space-between;

	width: 100%;
	padding: 5px;
	border-bottom: 1px solid #cccccc;

	:last-child {
		border-bottom: none;
	}
`
