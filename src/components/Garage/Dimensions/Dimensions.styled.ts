import styled from '@emotion/styled'
import { GiWeight } from 'react-icons/gi'

import { getColor } from '@/styles/helpers/getColor'
import { flexCenterDirection } from '@/styles/mixins/flexCenterDirection'

export const Wrapper = styled.div`
	position: relative;
	width: 100%;
`

export const Weight = styled.div`
	position: absolute;
	bottom: 0;
	right: 0;

	${flexCenterDirection()}
`

export const WeightIcon = styled(GiWeight)`
	margin-left: 5px;

	width: 18px;
	height: 18px;

	color: ${getColor('gray')};
`
