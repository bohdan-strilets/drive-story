import styled from '@emotion/styled'

import { getColor } from '@/styles/helpers/getColor'
import { breakpoints } from '@/styles/media/breakpoints'
import { flexCenterDirection } from '@/styles/mixins/flexCenterDirection'

export const Wrapper = styled.div`
	${flexCenterDirection()}

	width: 40px;
	height: 40px;

	border-radius: 5px;
	background-color: ${getColor('black')};
	box-shadow: var(--box-shadow);

	@media screen and (max-width: ${breakpoints.mobileMax}) {
		margin: 5px 0;
		margin-left: 50%;

		transform: translateX(-50%);
	}
`

export const Text = styled.p`
	font-weight: 700;
	font-size: 14px;

	color: ${getColor('white')};
`
