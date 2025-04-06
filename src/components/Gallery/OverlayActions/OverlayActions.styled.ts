import styled from '@emotion/styled'

import { getColor } from '@/styles/helpers/getColor'
import { flexCenterDirection } from '@/styles/mixins/flexCenterDirection'

export const List = styled.ul`
	width: 100%;
`

export const Item = styled.li`
	width: 100%;
	height: 40px;

	border-bottom: 1px solid ${getColor('black')};

	:last-child {
		border-bottom: none;
	}
`

export const ControllerButton = styled.button`
	${flexCenterDirection()}
	justify-content: start;

	width: 100%;
	height: 100%;
	padding: 0 25px;

	background: transparent;
	color: ${getColor('black')};

	cursor: pointer;
	transition: color var(--hover-effect);

	:hover,
	:focus {
		color: ${getColor('white')};
	}

	:disabled {
		color: ${getColor('gray')};
		pointer-events: none;
	}
`

export const Label = styled.p`
	margin-left: 15px;
`
