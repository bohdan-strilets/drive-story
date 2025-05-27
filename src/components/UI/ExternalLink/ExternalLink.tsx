import { FC } from 'react'

import { ExternalLinkProps } from '@/types/props/UI/ExternalLinkProps'

import { StyledLink } from './ExternalLink.styled'

const ExternalLink: FC<ExternalLinkProps> = ({ href, label }) => {
	return (
		<StyledLink target="_blank" rel="noopener noreferrer" href={href}>
			{label}
		</StyledLink>
	)
}

export default ExternalLink
