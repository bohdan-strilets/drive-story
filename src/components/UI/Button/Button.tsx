import { FC } from 'react'

import { ButtonProps } from '@/types/props/UI/ButtonProps'

import { StyledButton } from './Button.styled'

const Button: FC<ButtonProps> = ({
	children,
	variant = 'black',
	width,
	margin,
	...otherProps
}) => {
	return (
		<StyledButton
			type="button"
			variant={variant}
			width={width}
			margin={margin}
			{...otherProps}
		>
			{children}
		</StyledButton>
	)
}

export default Button
