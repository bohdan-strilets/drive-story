import styled from '@emotion/styled'

import { getColor } from '@/styles/helpers/getColor'

export const Wrapper = styled.div`
	position: absolute;
	z-index: 1;

	top: 110%;
	left: 0;

	width: 100%;
	padding: 15px;

	background: ${getColor('white')};
	box-shadow: var(--box-shadow);
	border-radius: 3px;
`
