import styled from '@emotion/styled'
import { FaArrowRight } from 'react-icons/fa6'

import { getColor } from '@/styles/helpers/getColor'
import { flexCenterDirection } from '@/styles/mixins/flexCenterDirection'

export const Wrapper = styled.article`
	position: relative;

	width: 100%;
	height: auto;

	box-shadow: var(--box-shadow);
	border-radius: 5px;
`

export const Information = styled.div``

export const Header = styled.div`
	${flexCenterDirection()}
	justify-content: space-between;

	padding: 15px;

	background-color: ${getColor('black')};
	color: ${getColor('white')};
	border-top: 3px solid ${getColor('gray')};
`

export const Name = styled.p`
	font-weight: 700;
	font-size: 20px;
	text-transform: uppercase;
`

export const Year = styled.p`
	font-weight: 700;
	font-size: 20px;
`

export const List = styled.ul``

export const Item = styled.li`
	${flexCenterDirection()}
	justify-content: space-between;

	padding: 10px;

	border-bottom: 1px solid ${getColor('#cccccc')};

	:last-child {
		border-bottom: none;
	}
`

export const IconWrapper = styled.div`
	${flexCenterDirection()}
`

export const Label = styled.p`
	margin-left: 10px;
	font-weight: 700;
`

export const Value = styled.p`
	font-weight: 500;
	color: ${getColor('gray')};
`

export const ButtonIcon = styled(FaArrowRight)`
	margin-left: 15px;
`
