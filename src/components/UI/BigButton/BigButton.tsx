import { FC } from 'react'
import { RiFunctionAddFill } from 'react-icons/ri'

import { BigButtonProps } from '@/types/props/UI/BigButtonProps'

import { Button, IconWrapper, Label } from './BigButton.styled'

const BigButton: FC<BigButtonProps> = ({
	onClick,
	label,
	width = '100%',
	height = '260px',
	margin = '',
	iconSize = '160px',
	labelSize = '24px',
}) => {
	return (
		<Button
			type="button"
			onClick={onClick}
			width={width}
			height={height}
			margin={margin}
		>
			<IconWrapper className="icon" iconSize={iconSize}>
				<RiFunctionAddFill />
			</IconWrapper>
			<Label labelSize={labelSize}>{label}</Label>
		</Button>
	)
}

export default BigButton
