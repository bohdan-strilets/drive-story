import { FC } from 'react'
import { createPortal } from 'react-dom'

import useResponsive from '@/hooks/useResponsive'

import { MenuProps } from '@/types/props/Menu/MenuProps'

import { fadeIn } from '@/animations/fadeIn'
import { slideIn } from '@/animations/slideIn'

import CloseBtn from '../UI/CloseBtn'
import Copyright from '../UI/Copyright'
import Logo from '../UI/Logo'
import UserBar from '../UI/UserBar'

import { Backdtop, CopyrightContainer, Footer, Wrapper } from './Menu.styled'
import Navigation from './Navigation'

const menuPortal = document.getElementById('menu') as HTMLDivElement

const Menu: FC<MenuProps> = ({ onClose, onBackdropClick }) => {
	const { minTablet } = useResponsive()

	return createPortal(
		<Backdtop onClick={onBackdropClick} {...fadeIn(0.5)}>
			<Wrapper {...slideIn('left', 0.5)}>
				<CloseBtn onClose={onClose} />
				<Logo color="white" size="small" />
				<Navigation
					margin={minTablet ? '45px 0 0 0' : '25px 0 0 0'}
					itemHeight="60px"
				/>
				<Footer>
					<UserBar
						email="bohdan.strilets@gmail.com"
						avatarUrl="https://res.cloudinary.com/ddd1vgg5b/image/upload/v1738671410/drive-story/default/wkj0lwfumli3e6ga95tk.jpg"
						name="Bohdan Strilets"
						logoutBtnColor="yellow"
						width="100%"
					/>
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
