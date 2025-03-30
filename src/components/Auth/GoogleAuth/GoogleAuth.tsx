import { CredentialResponse, GoogleLogin } from '@react-oauth/google'
import { FC } from 'react'
import toast from 'react-hot-toast'

import { useGoogleAuth } from '@/hooks/auth/useGoogleAuth'
import useSubmit from '@/hooks/ui/useSubmit'

import { routes } from '@/config/routes'

import { GoogleAuthDto } from '@/types/dto/GoogleAuthDto'
import { AuthResponse } from '@/types/types/AuthResponse'

import { GoogleButtonWrapper, Text, Wrapper } from './GoogleAuth.styled'

const GoogleAuth: FC = () => {
	const { mutateAsync: googleAuth } = useGoogleAuth()

	const submitGoogleAuth = useSubmit<AuthResponse | null, GoogleAuthDto>({
		callback: googleAuth,
		navigateTo: routes.HOME,
	})

	const onSuccess = async (credentialResponse: CredentialResponse) => {
		const googleToken = credentialResponse.credential

		if (googleToken) {
			const dto: GoogleAuthDto = { token: googleToken }
			submitGoogleAuth(dto)
		}
	}

	const onError = () => {
		toast.error('Error using google authorization')
	}

	return (
		<Wrapper>
			<Text>Or use Google</Text>
			<GoogleButtonWrapper>
				<GoogleLogin
					onSuccess={onSuccess}
					onError={onError}
					theme="filled_black"
					size="large"
					shape="rectangular"
					text="continue_with"
					width={300}
				/>
			</GoogleButtonWrapper>
		</Wrapper>
	)
}

export default GoogleAuth
