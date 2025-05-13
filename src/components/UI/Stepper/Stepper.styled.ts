import styled from '@emotion/styled'

import { ItemProps } from '@/types/props/UI/StepperProps'

import { getColor } from '@/styles/helpers/getColor'
import { flexCenterDirection } from '@/styles/mixins/flexCenterDirection'

export const List = styled.ul`
	position: relative;

	margin-bottom: 15px;
	padding: 0;

	${flexCenterDirection()}
	justify-content: space-between;

	&::before {
		content: '';
		position: absolute;
		top: 50%;
		left: 15px;
		right: 15px;

		border-top: 1px dotted ${getColor('black')};

		transform: translateY(-50%);
		z-index: 0;
	}
`

export const Item = styled.li<ItemProps>`
	position: relative;
	z-index: 1;

	${flexCenterDirection()}
	font-weight: 600;

	width: 30px;
	height: 30px;

	border-radius: 50%;
	background-color: ${({ currentStep, index }) =>
		`${getColor(currentStep > index ? '#d2d2d2' : 'yellow')};`};
`
