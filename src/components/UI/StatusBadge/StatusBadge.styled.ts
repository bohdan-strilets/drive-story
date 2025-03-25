import styled from '@emotion/styled'

import { StatusProps } from '@/types/props/UI/StatusBadgeProps'

import { getColor } from '@/styles/helpers/getColor'
import { breakpoints } from '@/styles/media/breakpoints'

export const Status = styled.div<StatusProps>`
	width: 14px;
	height: 14px;

	border-radius: 50%;

	box-shadow: var(--box-shadow);
	background: ${({ status }) =>
		status ? `${getColor('green')}` : `${getColor('red')}`};

	@media screen and (min-width: ${breakpoints.tabletMin}) {
		width: 18px;
		height: 18px;
	}
`
