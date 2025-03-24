import { CredentialResponse, GoogleLogin } from '@react-oauth/google'
import { FC } from 'react'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

import { useGoogleAuth } from '@/hooks/auth/useGoogleAuth'

import { routes } from '@/config/routes'

import { handleError } from '@/utils/handleError'

import { GoogleButtonWrapper, Text, Wrapper } from './GoogleAuth.styled'

const GoogleAuth: FC = () => {
	const { mutateAsync: googleAuth } = useGoogleAuth()
	const navigate = useNavigate()

	const onSuccess = async (credentialResponse: CredentialResponse) => {
		const googleToken = credentialResponse.credential

		if (googleToken) {
			try {
				const dto = { token: googleToken }
				const response = await googleAuth(dto)

				if (!response.success) {
					toast.error(response.message || 'Error using google authorization')
					return
				}

				navigate(routes.HOME)
			} catch (error) {
				handleError(error)
			}
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
