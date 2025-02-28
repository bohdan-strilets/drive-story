import styled from '@emotion/styled'
import { Link } from 'react-router-dom'

import { WrapperProps } from '@/types/props/UI/UserBarProps'

import { getColor } from '@/styles/helpers/getColor'
import { breakpoints } from '@/styles/media/breakpoints'
import { flexCenterDirection } from '@/styles/mixins/flexCenterDirection'

export const Wrapper = styled.div<WrapperProps>`
	${flexCenterDirection('column')}
	align-items: end;

	width: ${({ width }) => width};

	@media screen and (min-width: ${breakpoints.tabletMin}) {
		flex-direction: row;
	}
`

export const StyledLink = styled(Link)`
	${flexCenterDirection()}
	align-items: end;
	justify-content: end;

	@media screen and (max-width: ${breakpoints.mobileMax}) {
		margin-bottom: 10px;
	}

	@media screen and (min-width: ${breakpoints.tabletMin}) {
		margin-right: 15px;
	}
`

export const InfoContainer = styled.div`
	${flexCenterDirection('column')}
	align-items: end;

	margin-right: 8px;

	@media screen and (min-width: ${breakpoints.tabletMin}) {
		margin-right: 15px;
	}
`

export const Name = styled.p`
	font-size: 12px;
	font-weight: 700;

	@media screen and (min-width: ${breakpoints.tabletMin}) {
		font-size: 16px;
	}
`

export const Email = styled.p`
	font-size: 12px;
	font-weight: 500;

	color: ${getColor('gray')};

	@media screen and (min-width: ${breakpoints.tabletMin}) {
		font-size: 16px;
	}
`
