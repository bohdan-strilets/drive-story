import styled from '@emotion/styled'
import { Link } from 'react-router-dom'

import { getColor } from '@/styles/helpers/getColor'
import { flexCenterDirection } from '@/styles/mixins/flexCenterDirection'

export const StyledLink = styled(Link)`
	${flexCenterDirection()}
	align-items: end;

	padding-bottom: 5px;
	border-bottom: 2px dotted transparent;

	transition: border-bottom var(--hover-effect);

	:hover,
	:focus {
		border-bottom: 2px dotted ${getColor('black')};
	}
`

export const InfoContainer = styled.div`
	${flexCenterDirection('column')}
	align-items: end;

	margin-right: 15px;
`

export const Name = styled.p`
	font-weight: 700;
`

export const Email = styled.p`
	font-weight: 500;
	color: ${getColor('gray')};
`
