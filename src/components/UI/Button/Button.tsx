import { FC } from 'react'

import { ButtonProps } from '@/types/props/UI/ButtonProps'

import { StyledButton } from './Button.styled'

const Button: FC<ButtonProps> = ({
	children,
	variant = 'black',
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
			variant={variant}
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
