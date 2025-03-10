import { FC } from 'react'

import { StyledLinkProps } from '@/types/props/UI/StyledLinkProps'

import { CustomLink } from './StyledLink.styled'

const StyledLink: FC<StyledLinkProps> = ({ path, label, margin }) => {
	return (
		<CustomLink to={path} margin={margin}>
			{label}
		</CustomLink>
	)
}

export default StyledLink
