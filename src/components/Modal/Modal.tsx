import { FC } from 'react'
import { createPortal } from 'react-dom'

import useModal from '@/hooks/ui/useModal'
import useResponsive from '@/hooks/ui/useResponsive'

import { ModalProps } from '@/types/props/Modal/ModalProps'

import { fadeIn } from '@/animations/fadeIn'
import { floating } from '@/animations/floating'

import Button from '../UI/Button'
import CloseButton from '../UI/CloseButton'

import {
	Backdrop,
	Content,
	Footer,
	Header,
	Item,
	List,
	Title,
	Wrapper,
} from './Modal.styled'

const modalPortal = document.getElementById('modal') as HTMLDivElement

const Modal: FC<ModalProps> = ({
	children,
	title,
	isDialog = false,
	positiveBtnLabel,
	negativeBtnLabel,
	positiveCallback,
	negativeCallback,
}) => {
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
						hoverColor="white"
						position={{ top: maxMobile ? '20%' : '35%', right: '3%' }}
					/>
				</Header>
				<Content>{children}</Content>
				{isDialog && (
					<Footer>
						<List>
							<Item>
								<Button
									onClick={negativeCallback}
									color={'white'}
									background={'red'}
									hoverColor={'white'}
									hoverBackground={'gray'}
									width="100%"
								>
									{negativeBtnLabel}
								</Button>
							</Item>
							<Item>
								<Button
									onClick={positiveCallback}
									color={'white'}
									background={'green'}
									hoverColor={'white'}
									hoverBackground={'gray'}
									width="100%"
								>
									{positiveBtnLabel}
								</Button>
							</Item>
						</List>
					</Footer>
				)}
			</Wrapper>
		</Backdrop>,
		modalPortal
	)
}

export default Modal
