import { FC, useState } from 'react'

import Button from '@/components/UI/Button'
import Logo from '@/components/UI/Logo'
import MenuIcon from '@/components/UI/MenuIcon'
import UserBar from '@/components/UI/UserBar'

import useResponsive from '@/hooks/useResponsive'

import Container from '../Container'

import { ActionsContainer, LogoContainer, Wrapper } from './Header.styled'

const Header: FC = () => {
	const [isLoggedIn, setIsLoggedIn] = useState(false)
	const { minTablet } = useResponsive()

	const handleToggleAuth = () => setIsLoggedIn((state) => !state)

	const renderAuthContent = () => {
		if (isLoggedIn) {
			return minTablet ? (
				<UserBar
					email="bohdan.strilets@gmail.com"
					avatarUrl="https://res.cloudinary.com/ddd1vgg5b/image/upload/v1738671410/drive-story/default/wkj0lwfumli3e6ga95tk.jpg"
					name="Bohdan Strilets"
				/>
			) : null
		}

		return (
			<Button variant="black" onClick={handleToggleAuth}>
				auth
			</Button>
		)
	}

	return (
		<Wrapper>
			<Container>
				<ActionsContainer>
					{isLoggedIn && (
						<Button variant="black">
							<MenuIcon />
						</Button>
					)}
					{renderAuthContent()}
				</ActionsContainer>
				<LogoContainer>
					<Logo color="black" size="large" />
				</LogoContainer>
			</Container>
		</Wrapper>
	)
}

export default Header
