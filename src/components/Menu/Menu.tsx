import { FC } from 'react'
import { createPortal } from 'react-dom'
import { ImExit } from 'react-icons/im'

import useModal from '@/hooks/ui/useModal'
import useResponsive from '@/hooks/ui/useResponsive'

import { modalNames } from '@/config/modalConfig'

import { MenuProps } from '@/types/props/Menu/MenuProps'

import { fadeIn } from '@/animations/fadeIn'
import { slideIn } from '@/animations/slideIn'

import Button from '../UI/Button'
import CloseButton from '../UI/CloseButton'
import Copyright from '../UI/Copyright'
import Logo from '../UI/Logo'
import UserBar from '../UI/UserBar'

import { Backdtop, CopyrightContainer, Footer, Wrapper } from './Menu.styled'
import Navigation from './Navigation'

const menuPortal = document.getElementById('menu') as HTMLDivElement

const Menu: FC<MenuProps> = ({ onClose, onBackdropClick }) => {
	const { minTablet } = useResponsive()
	const { onOpen } = useModal()

	return createPortal(
		<Backdtop onClick={onBackdropClick} {...fadeIn(0.5)}>
			<Wrapper {...slideIn('left', 0.5)}>
				<CloseButton
					onClose={onClose}
					color="yellow"
					hoverColor="gray"
					position={
						minTablet
							? { top: '25px', right: '35px' }
							: { top: '10px', right: '5px' }
					}
				/>
				<Logo color="white" scale="small" />
				<Navigation
					closeMenu={onClose}
					margin={minTablet ? '45px 0 0 0' : '25px 0 0 0'}
					itemHeight="60px"
				/>
				<Footer>
					<UserBar width="100%" />

					<Button
						color="black"
						background="yellow"
						hoverColor="white"
						hoverBackground="gray"
						width="100%"
						height="40px"
						margin="15px 0 0 0"
						onClick={() => onOpen(modalNames.EXIT_PROFILE)}
						disabled={false}
					>
						<ImExit size={20} />
					</Button>

					<CopyrightContainer>
						<Copyright margin="30px 0 0 0" textAlign="center" />
					</CopyrightContainer>
				</Footer>
			</Wrapper>
		</Backdtop>,
		menuPortal
	)
}

export default Menu
