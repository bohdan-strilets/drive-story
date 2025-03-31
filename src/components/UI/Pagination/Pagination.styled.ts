import styled from '@emotion/styled'

import { getColor } from '@/styles/helpers/getColor'
import { flexCenterDirection } from '@/styles/mixins/flexCenterDirection'

export const Wrapper = styled.div`
	${flexCenterDirection()}
	justify-content: space-evenly;

	padding: 15px;
	margin-top: 15px;
`

export const PageButton = styled.button`
	position: relative;

	width: 30px;
	height: 30px;

	font-weight: 700;

	color: ${getColor('black ')};
	background-color: transparent;
	border: none;
	outline: none;

	cursor: pointer;
	transition: color var(--hover-effect);

	:hover,
	:focus {
		color: ${getColor('yellow')};
	}

	:disabled {
		color: ${getColor('#cccccc')};
		pointer-events: none;
	}
`
