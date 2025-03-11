import { FC } from 'react'

import { ButtonProps } from '@/types/props/UI/ButtonProps'

import { StyledButton } from './Button.styled'

const Button: FC<ButtonProps> = ({
	children,
	color = 'black',
	background = 'yellow',
	hoverColor = 'white',
	hoverBackground = 'black',
	type = 'button',
	width,
	height,
	margin,
	padding,
	isShadow = false,
	...otherProps
}) => {
	return (
		<StyledButton
			color={color}
			background={background}
			hoverColor={hoverColor}
			hoverBackground={hoverBackground}
			type={type}
			width={width}
			height={height}
			margin={margin}
			padding={padding}
			isShadow={isShadow}
			{...otherProps}
		>
			{children}
		</StyledButton>
	)
}

export default Button
