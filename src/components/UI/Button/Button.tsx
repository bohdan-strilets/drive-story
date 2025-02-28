import { FC } from 'react'

import { ButtonProps } from '@/types/props/UI/ButtonProps'

import { StyledButton } from './Button.styled'

const Button: FC<ButtonProps> = ({
	children,
	variant = 'black',
	width,
	height,
	margin,
	padding,
	...otherProps
}) => {
	return (
		<StyledButton
			type="button"
			variant={variant}
			width={width}
			height={height}
			margin={margin}
			padding={padding}
			{...otherProps}
		>
			{children}
		</StyledButton>
	)
}

export default Button
