import styled from '@emotion/styled'

import { TextProps } from '@/types/props/UI/CopyrightProps'

import { breakpoints } from '@/styles/media/breakpoints'

export const Text = styled.p<TextProps>`
	font-weight: 500;
	font-size: 14px;
	text-align: ${({ textAlign }) => textAlign};

	margin: ${({ margin }) => margin};

	@media screen and (max-width: ${breakpoints.mobileMax}) {
		text-align: ${({ textAlign }) => (textAlign ? textAlign : 'center')};
	}
`
