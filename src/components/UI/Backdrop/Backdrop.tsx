import { FC } from 'react'

import { BackdropProps } from '@/types/props/UI/BackdropProps'

import { fadeIn } from '@/animations/fadeIn'

import { Wrapper } from './Backdrop.styled'

const Backdrop: FC<BackdropProps> = ({ children, onClose }) => {
	const onBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
		if (e.target === e.currentTarget) onClose()
	}

	return (
		<Wrapper onClick={onBackdropClick} {...fadeIn(0.3)}>
			{children}
		</Wrapper>
	)
}

export default Backdrop
