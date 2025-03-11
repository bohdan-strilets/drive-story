import { FC } from 'react'

import { StyledLinkProps } from '@/types/props/UI/StyledLinkProps'

import { CustomLink } from './StyledLink.styled'

const StyledLink: FC<StyledLinkProps> = ({
	path,
	label,
	color,
	hoverColor,
	margin,
}) => {
	return (
		<CustomLink to={path} color={color} hoverColor={hoverColor} margin={margin}>
			{label}
		</CustomLink>
	)
}

export default StyledLink
