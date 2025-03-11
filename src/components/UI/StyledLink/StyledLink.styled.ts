import styled from '@emotion/styled'
import { Link } from 'react-router-dom'

import { CustomLinkProps } from '@/types/props/UI/StyledLinkProps'

import { getColor } from '@/styles/helpers/getColor'

export const CustomLink = styled(Link)<CustomLinkProps>`
	display: inline-block;

	text-decoration: underline;

	margin: ${({ margin }) => margin};

	color: ${({ color }) => getColor(color)};

	transition: color var(--hover-effect);

	:hover,
	:focus {
		color: ${({ hoverColor }) => getColor(hoverColor)};
	}
`
