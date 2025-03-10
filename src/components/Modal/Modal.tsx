import { FC } from 'react'
import { createPortal } from 'react-dom'

import useModal from '@/hooks/useModal'

import { ModalProps } from '@/types/props/Modal/ModalProps'

import { fadeIn } from '@/animations/fadeIn'
import { floating } from '@/animations/floating'

import CloseBtn from '../UI/CloseBtn'

import { Backdop, Content, Header, Title, Wrapper } from './Modal.styled'

const modalPortal = document.getElementById('modal') as HTMLDivElement

const Modal: FC<ModalProps> = ({ children, title }) => {
	const { onClose, onBackdropClick } = useModal()

	return createPortal(
		<Backdop onClick={onBackdropClick} {...fadeIn(0.3)}>
			<Wrapper {...floating()}>
				<Header>
					<Title>{title}</Title>
					<CloseBtn onClose={onClose} position={{ top: '50%', right: '3%' }} />
				</Header>
				<Content>{children}</Content>
			</Wrapper>
		</Backdop>,
		modalPortal
	)
}

export default Modal
