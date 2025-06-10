import styled from '@emotion/styled'

import { WrapperProps } from '@/types/props/Garage/BrandLogoProps'

import { getColor } from '@/styles/helpers/getColor'
import { breakpoints } from '@/styles/media/breakpoints'
import { flexCenterDirection } from '@/styles/mixins/flexCenterDirection'

export const Wrapper = styled.div<WrapperProps>`
	${flexCenterDirection()}

	width: 50px;
	height: 50px;
	padding: 5px;
	margin: ${({ margin }) => margin};

	border-radius: 5px;
	background-color: ${getColor('rgba(255, 255, 255,0.7)')};
	backdrop-filter: blur(1px);

	@media screen and (min-width: ${breakpoints.tabletMin}) {
		width: 110px;
		height: 110px;
	}
`
