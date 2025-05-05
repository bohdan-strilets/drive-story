import { FC } from 'react'

import { BadgeProps } from '@/types/props/UI/BadgeProps'

import { Label, Wrapper } from './Badge.styled'

const Badge: FC<BadgeProps> = ({ label }) => {
	return (
		<Wrapper>
			<Label>{label}</Label>
		</Wrapper>
	)
}

export default Badge
