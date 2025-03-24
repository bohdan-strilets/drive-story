import styled from '@emotion/styled'

import { getColor } from '@/styles/helpers/getColor'
import { breakpoints } from '@/styles/media/breakpoints'
import { flexCenterDirection } from '@/styles/mixins/flexCenterDirection'

export const Wrapper = styled.div`
	margin-top: 20px;
`

export const Text = styled.p`
	position: relative;
	text-align: center;
	margin-bottom: 15px;

	::after {
		content: '';

		position: absolute;
		top: 50%;
		left: 0;

		width: 25%;
		height: 1px;

		background-color: ${getColor('#cccccc')};

		@media screen and (min-width: ${breakpoints.tabletMin}) {
			width: 33%;
		}
	}

	::before {
		content: '';

		position: absolute;
		top: 50%;
		right: 0;

		width: 25%;
		height: 1px;

		background-color: ${getColor('#cccccc')};

		@media screen and (min-width: ${breakpoints.tabletMin}) {
			width: 33%;
		}
	}
`

export const GoogleButtonWrapper = styled.div`
	${flexCenterDirection()}
	justify-content: center;
`
