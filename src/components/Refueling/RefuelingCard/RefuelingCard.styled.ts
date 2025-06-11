import styled from '@emotion/styled'

import { getColor } from '@/styles/helpers/getColor'
import { breakpoints } from '@/styles/media/breakpoints'
import { flexCenterDirection } from '@/styles/mixins/flexCenterDirection'

export const Wrapper = styled.div`
	padding: 5px;
	margin-bottom: 10px;

	border: 1px solid #e8e8e8;
	border-radius: 5px;

	:last-child {
		margin-bottom: 0;
	}

	:nth-of-type(odd) {
		background-color: ${getColor('#e8e8e8')};
	}

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
