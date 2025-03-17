import { FC } from 'react'

import ImageBox from '@/components/UI/ImageBox'
import StyledLink from '@/components/UI/StyledLink'

import successImage from '@/assets/welcome/success.webp'

import { Item, List, Text } from './WelcomeMessage.styled'

const WelcomeMessage: FC = () => {
	return (
		<>
			<ImageBox imageUrl={successImage} width="100%" height="300px" />

			<Text>Congratulations on your successful registration!</Text>
			<p>To activate your account, please follow these steps:</p>
			<List>
				<Item>
					<p>
						Check your email. We have sent you a message with a unique
						confirmation link.
					</p>
				</Item>
				<Item>
					<p>
						Click on the link. This will activate your account and grant you
						full access to all features.
					</p>
				</Item>
				<Item>
					<p>
						If you cannot find the email, please check your spam folder or use
						the option to{' '}
						<StyledLink
							path={''}
							label="resend the link"
							color="yellow"
							hoverColor="gray"
						/>
						.
					</p>
				</Item>
			</List>
			<p>
				Thank you for choosing our service! We are delighted to have you among
				our users.
			</p>
		</>
	)
}

export default WelcomeMessage
