import styled from '@emotion/styled'

import { WrapperProps } from '@/types/props/PhoneBook/ContactWidgetProps'

import { getColor } from '@/styles/helpers/getColor'
import { flexCenterDirection } from '@/styles/mixins/flexCenterDirection'

export const Placeholder = styled.div<WrapperProps>`
	${flexCenterDirection()}

	margin: ${({ margin }) => margin};

	background-color: #e8e8e8;
	border: 3px solid #b7b7b7;
	border-radius: 5px;
`

export const Wrapper = styled.div<WrapperProps>`
	${flexCenterDirection('column')}
	align-items: start;

	margin: ${({ margin }) => margin};
	padding: 10px;
	width: 100%;

	background-color: ${getColor('#eeeeee')};
	border-radius: 5px;
	box-shadow: var(--box-shadow);
`

export const Header = styled.div`
	position: relative;
	width: 100%;
`

export const Item = styled.div`
	${flexCenterDirection()}
	justify-content: start;
`
