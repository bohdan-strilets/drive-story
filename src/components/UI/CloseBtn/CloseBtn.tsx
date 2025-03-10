import { FC } from 'react'
import { RxCross2 } from 'react-icons/rx'

import { CloseBtnProps } from '@/types/props/UI/CloseBtnProps'

import { Button } from './CloseBtn.styled'

const CloseBtn: FC<CloseBtnProps> = ({ onClose, position, variant }) => {
	return (
		<Button
			type="button"
			onClick={onClose}
			position={position}
			variant={variant}
		>
			<RxCross2 />
		</Button>
	)
}

export default CloseBtn
