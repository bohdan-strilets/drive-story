import { FC } from 'react'
import { createPortal } from 'react-dom'

import useModal from '@/hooks/ui/useModal'
import useResponsive from '@/hooks/ui/useResponsive'

import { ModalProps } from '@/types/props/Modal/ModalProps'

import { fadeIn } from '@/animations/fadeIn'
import { floating } from '@/animations/floating'

import CloseButton from '../UI/CloseButton'

import { Backdrop, Content, Header, Title, Wrapper } from './Modal.styled'

const modalPortal = document.getElementById('modal') as HTMLDivElement

const Modal: FC<ModalProps> = ({ children, title }) => {
	const { onClose, onBackdropClick } = useModal()
	const { maxMobile } = useResponsive()

	return createPortal(
		<Backdrop onClick={onBackdropClick} {...fadeIn(0.3)}>
			<Wrapper {...floating()}>
				<Header>
					<Title>{title}</Title>
					<CloseButton
						onClose={onClose}
						color="black"
						hoverColor="gray"
						position={{ top: maxMobile ? '20%' : '35%', right: '3%' }}
					/>
				</Header>
				<Content>{children}</Content>
			</Wrapper>
		</Backdrop>,
		modalPortal
	)
}

export default Modal
