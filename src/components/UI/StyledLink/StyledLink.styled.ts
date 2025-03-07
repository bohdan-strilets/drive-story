import styled from '@emotion/styled'
import { Link } from 'react-router-dom'

import { WrapperProps } from '@/types/props/UI/StyledLinkProps'

import { getColor } from '@/styles/helpers/getColor'

export const Wrapper = styled(Link)<WrapperProps>`
	margin: ${({ margin }) => margin};
	color: ${getColor('yellow')};
	transition: color var(--hover-effect);

	:hover,
	:focus {
		color: ${getColor('gray')};
	}
`
