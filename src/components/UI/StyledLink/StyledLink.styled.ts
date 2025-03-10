import styled from '@emotion/styled'
import { Link } from 'react-router-dom'

import { CustomLinkProps } from '@/types/props/UI/StyledLinkProps'

import { getColor } from '@/styles/helpers/getColor'

export const CustomLink = styled(Link)<CustomLinkProps>`
	display: inline-block;

	margin: ${({ margin }) => margin};
	color: ${getColor('yellow')};
	transition: color var(--hover-effect);

	:hover,
	:focus {
		color: ${getColor('gray')};
	}
`
