import styled from '@emotion/styled'

import { getColor } from '@/styles/helpers/getColor'

export const Item = styled.li`
	margin-bottom: 10px;

	border: 1px solid #e8e8e8;
	border-radius: 5px;

	transition: box-shadow var(--hover-effect);
	cursor: pointer;

	:last-child {
		margin-bottom: 0;
	}

	:nth-of-type(odd) {
		background-color: ${getColor('#e8e8e8')};
	}

	:hover,
	:focus {
		box-shadow: var(--box-shadow);
	}
`
