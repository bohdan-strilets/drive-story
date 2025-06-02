import styled from '@emotion/styled'

import { getColor } from '@/styles/helpers/getColor'
import { flexCenterDirection } from '@/styles/mixins/flexCenterDirection'

export const List = styled.ul``

export const Item = styled.li`
	${flexCenterDirection()}

	height: 50px;
	border-bottom: 1px solid ${getColor('#cccccc')};

	:last-child {
		border-bottom: none;
	}
`

export const Button = styled.button`
	${flexCenterDirection()}
	justify-content: space-between;

	width: 100%;
	height: 100%;
	padding: 0 10px;

	background: transparent;
	color: ${getColor('black')};

	cursor: pointer;
	transition:
		background var(--hover-effect),
		color var(--hover-effect);

	:hover,
	:focus {
		background: ${getColor('yellow')};
		color: 'black';
	}
`

export const BindBtn = styled.button`
	${flexCenterDirection()}

	font-weight: 500;
	text-transform: uppercase;

	padding: 0 15px;
	height: 100%;

	color: ${getColor('white')};
	background-color: ${getColor('black')};

	cursor: pointer;
	transition: background-color var(--hover-effect);

	:hover,
	:focus {
		background-color: ${getColor('gray')};
	}

	:active {
		transform: scale(0.99);
	}

	:disabled {
		background-color: ${getColor('#cccccc')};
		pointer-events: none;
	}
`
