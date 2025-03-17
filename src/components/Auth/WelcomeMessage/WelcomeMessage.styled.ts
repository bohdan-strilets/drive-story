import styled from '@emotion/styled'

export const Text = styled.p`
	text-align: center;
	font-weight: 700;
	margin-bottom: 15px;
`

export const List = styled.ul`
	margin: 15px 0;
	padding-left: 30px;
	list-style: decimal;
`

export const Item = styled.li`
	margin-bottom: 10px;

	:last-child {
		margin-bottom: 0;
	}
`
