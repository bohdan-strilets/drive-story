import styled from '@emotion/styled'

import { getColor } from '@/styles/helpers/getColor'

export const Wrapper = styled.div`
	position: absolute;
	top: 0;
	right: 0;
	z-index: 99;

	padding: 5px 20px;

	background-color: ${getColor('red')};
	border-bottom-left-radius: 15px;
	box-shadow: var(--box-shadow);
	border-bottom: 2px solid ${getColor('black')};
`

export const Label = styled.p`
	font-weight: 700;
	font-size: 14px;
	text-transform: uppercase;

	color: ${getColor('white')};
`
