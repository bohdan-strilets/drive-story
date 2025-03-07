import { FC } from 'react'

import { StyledLinkProps } from '@/types/props/UI/StyledLinkProps'

import { Wrapper } from './StyledLink.styled'

const StyledLink: FC<StyledLinkProps> = ({ path, label, margin }) => {
	return (
		<Wrapper to={path} margin={margin}>
			{label}
		</Wrapper>
	)
}

export default StyledLink
