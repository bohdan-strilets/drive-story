import { FC } from 'react'
import { FaArrowLeft } from 'react-icons/fa6'

import { ButtonGoBackProps } from '@/types/props/UI/ButtonGoBackProps'

import { Button, Label } from './ButtonGoBack.styled'

const ButtonGoBack: FC<ButtonGoBackProps> = ({
	label,
	onClick,
	margin = '',
	color = 'green',
}) => {
	return (
		<Button type="button" onClick={onClick} margin={margin} color={color}>
			<FaArrowLeft />
			<Label>Back to {label}</Label>
		</Button>
	)
}

export default ButtonGoBack
