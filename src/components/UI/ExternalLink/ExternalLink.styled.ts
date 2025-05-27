import styled from '@emotion/styled'

import { getColor } from '@/styles/helpers/getColor'

export const StyledLink = styled.a`
	text-decoration: underline;
	color: ${getColor('green')};

	transition: color var(--hover-effect);

	:hover,
	:focus {
		color: ${getColor('black')};
	}
`
