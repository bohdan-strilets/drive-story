import { AnimatePresence } from 'motion/react'
import { FC, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import Menu from '@/components/Menu'
import Button from '@/components/UI/Button'
import Logo from '@/components/UI/Logo'
import MenuIcon from '@/components/UI/MenuIcon'
import UserBar from '@/components/UI/UserBar'

import useMenu from '@/hooks/useMenu'
import useResponsive from '@/hooks/useResponsive'

import { routes } from '@/config/routes'

import Container from '../Container'

import { ActionsContainer, LogoContainer, Wrapper } from './Header.styled'

const Header: FC = () => {
	const [isLoggedIn] = useState(false)
	const { minTablet } = useResponsive()
	const { onOpen, onClose, onBackdropClick, isOpen } = useMenu()

	const navigate = useNavigate()
	const onAuthClick = () => navigate(routes.AUTH)

	const renderAuthContent = () => {
		if (isLoggedIn) {
			return minTablet ? (
				<UserBar
					email="bohdan.strilets@gmail.com"
					avatarUrl="https://res.cloudinary.com/ddd1vgg5b/image/upload/v1738671410/drive-story/default/wkj0lwfumli3e6ga95tk.jpg"
					name="Bohdan Strilets"
					logoutBtnColor="black"
				/>
			) : null
		}

		return (
			<Button variant="black" onClick={onAuthClick}>
				auth
			</Button>
		)
	}

	return (
		<>
			<Wrapper>
				<Container>
					<ActionsContainer>
						{isLoggedIn && (
							<Button variant="black" onClick={onOpen}>
								<MenuIcon />
							</Button>
						)}
						{renderAuthContent()}
					</ActionsContainer>
					<LogoContainer>
						<Logo color="black" variant="large" />
					</LogoContainer>
				</Container>
			</Wrapper>

			<AnimatePresence>
				{isOpen && <Menu onClose={onClose} onBackdropClick={onBackdropClick} />}
			</AnimatePresence>
		</>
	)
}

export default Header
