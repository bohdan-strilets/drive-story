import { FC } from 'react'

import ButtonAsLink from '@/components/UI/ButtonAsLink'
import ImageBox from '@/components/UI/ImageBox'
import Paragraph from '@/components/UI/Paragraph'

import useModal from '@/hooks/ui/useModal'

import successImage from '@/assets/auth/success.webp'

import { modalNames } from '@/config/modalConfig'

import { Item, List } from './WelcomeMessage.styled'

const WelcomeMessage: FC = () => {
	const { onOpen } = useModal()

	return (
		<>
			<ImageBox
				imageUrl={successImage}
				width="100%"
				height="300px"
				size="contain"
			/>
			<Paragraph
				color="black"
				fontWeight={700}
				textAlign="center"
				margin="0 0 15px 0"
			>
				Congratulations on your successful registration!
			</Paragraph>
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
						<ButtonAsLink
							onClick={() => onOpen(modalNames.RESEND_EMAIL)}
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
