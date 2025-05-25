import { FC } from 'react'

import { ActionButtonProps } from '@/types/props/UI/ActionButtonProps'

import { Button, IconWrapper, Label } from './ActionButton.styled'

const ActionButton: FC<ActionButtonProps> = ({
	onClick,
	label,
	icon,
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
				{icon}
			</IconWrapper>
			<Label labelSize={labelSize}>{label}</Label>
		</Button>
	)
}

export default ActionButton
