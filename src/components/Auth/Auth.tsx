import { FC, useState } from 'react'

import { AuthType } from '@/types/types/AuthType'

import { fadeSlide } from '@/animations/fadeSlide'

import Button from '../UI/Button'
import Title from '../UI/Title'

import { FormContainer, InfoContainer, Text, Wrapper } from './Auth.styled'
import GoogleAuth from './GoogleAuth'
import Login from './Login'
import Registration from './Registration'

const Auth: FC = () => {
	const [auth, setAuth] = useState<AuthType>('login')

	const goToLogin = () => setAuth('login')
	const goToRegistration = () => setAuth('registration')

	return (
		<Wrapper auth={auth} layout {...fadeSlide(-100, 0)}>
			<FormContainer>
				<Title
					color="black"
					fontSize={28}
					textAlign="center"
					margin="0 0 30px 0"
				>
					{auth === 'registration' ? 'Create account' : 'Sign in to DriveStory'}
				</Title>
				{auth === 'registration' ? <Registration /> : <Login />}
				<GoogleAuth />
			</FormContainer>
			<InfoContainer auth={auth}>
				<Title color="yellow" fontSize={28} textAlign="center">
					{auth === 'registration' ? 'Hello friend' : 'Welcome back'}
				</Title>
				<Text>
					{auth === 'registration'
						? 'Enter your personal details and start journey with us'
						: 'To keep connected with us please login with your personal info'}
				</Text>
				<Button
					type="button"
					background="yellow"
					color="black"
					hoverBackground="gray"
					hoverColor="white"
					width="280px"
					onClick={auth === 'registration' ? goToLogin : goToRegistration}
				>
					{auth === 'registration' ? 'login' : 'registration'}
				</Button>
			</InfoContainer>
		</Wrapper>
	)
}

export default Auth
