import styled from '@emotion/styled'

import { breakpoints } from '@/styles/media/breakpoints'

export const Text = styled.p`
	font-weight: 500;

	font-size: 14px;

	@media screen and (max-width: ${breakpoints.mobileMax}) {
		text-align: center;
	}
`
