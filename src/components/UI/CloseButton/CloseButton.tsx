import { FC } from 'react'
import { RxCross2 } from 'react-icons/rx'

import { CloseButtonProps } from '@/types/props/UI/CloseButtonProps'

import { Button } from './CloseButton.styled'

const CloseBtn: FC<CloseButtonProps> = ({
	onClose,
	position,
	color = 'yellow',
	hoverColor = 'black',
}) => {
	return (
		<Button
			type="button"
			onClick={onClose}
			position={position}
			color={color}
			hoverColor={hoverColor}
		>
			<RxCross2 />
		</Button>
	)
}

export default CloseBtn
