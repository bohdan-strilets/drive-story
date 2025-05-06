import styled from '@emotion/styled'

import { getColor } from '@/styles/helpers/getColor'
import { flexCenterDirection } from '@/styles/mixins/flexCenterDirection'

export const Wrapper = styled.div`
	${flexCenterDirection()}
	justify-content: end;
`

export const Container = styled.div`
	${flexCenterDirection()}
	display: inline-flex;

	width: 60px;
	height: 20px;

	background-color: ${getColor('#e4e4e4')};
	border-radius: 3px;
`

export const Text = styled.p`
	font-size: 10px;
	color: ${getColor('black')};
`
