import styled from '@emotion/styled'

import { getColor } from '@/styles/helpers/getColor'

export const Item = styled.li`
	border-radius: 5px;
	margin-bottom: 3px;
	padding: 5px;

	:nth-of-type(odd) {
		background-color: ${getColor('#e8e8e8')};
	}

	:last-child {
		margin-bottom: 0;
	}
`
