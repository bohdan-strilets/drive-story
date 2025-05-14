import styled from '@emotion/styled'

import { WrapperProps } from '@/types/props/Garage/LicensePlateProps'

import { getColor } from '@/styles/helpers/getColor'
import { breakpoints } from '@/styles/media/breakpoints'
import { flexCenterDirection } from '@/styles/mixins/flexCenterDirection'

export const Wrapper = styled.div<WrapperProps>`
	${flexCenterDirection()}
	justify-content: space-between;

	height: 80px;
	width: 100%;
	margin: ${({ margin }) => margin};

	background-color: #ffffff;
	border-radius: 8px;
	border: 3px solid ${getColor('black')};
	box-shadow: var(--box-shadow);
	overflow: hidden;

	@media screen and (min-width: ${breakpoints.tabletMin}) and (max-width: ${breakpoints.tabletMax}) {
		width: 50%;
	}
`

export const LeftSide = styled.div`
	${flexCenterDirection('column')}

	height: 100%;
	width: 14%;

	background-color: ${getColor('#003399')};
`

export const CountryName = styled.p`
	font-weight: 700;
	font-size: 22px;

	color: ${getColor('white')};
`

export const RightSIde = styled.div`
	${flexCenterDirection()}
	height: 100%;
	width: 86%;
`

export const Number = styled.p`
	font-weight: 700;
	font-size: 30px;
	text-transform: uppercase;
`
