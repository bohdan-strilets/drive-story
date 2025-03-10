import { FC } from 'react'

import { ButtonAsLinkProps } from '@/types/props/UI/ButtonAsLinkProps'

import { Button } from './ButtonAsLink.styled'

const ButtonAsLink: FC<ButtonAsLinkProps> = ({
	onClick,
	label,
	color = 'yellow',
	hoverColor = 'black',
	margin,
}) => {
	return (
		<Button
			type="button"
			onClick={onClick}
			color={color}
			hoverColor={hoverColor}
			margin={margin}
		>
			{label}
		</Button>
	)
}

export default ButtonAsLink
