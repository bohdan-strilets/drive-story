import { FC } from 'react'
import { useNavigate } from 'react-router-dom'

import Button from '@/components/UI/Button'
import ImageBox from '@/components/UI/ImageBox'
import Paragraph from '@/components/UI/Paragraph'
import Title from '@/components/UI/Title'

import medalImage from '@/assets/activationSuccess/medal.webp'

import { routes } from '@/config/routes'

import { Item, List } from './ActivationSuccess.styled'

const ActivationSuccess: FC = () => {
	const navigate = useNavigate()

	return (
		<>
			<Title
				color="black"
				fontSize={28}
				type="h1"
				textAlign="center"
				margin="0 0 30px 0"
			>
				Congratulations
			</Title>
			<Paragraph color="green" textAlign="center">
				Thank you for confirming your email. Now you can use all the features of
				our site!
			</Paragraph>
			<ImageBox
				imageUrl={medalImage}
				width="100%"
				height="300px"
				margin="30px 0"
			/>
			<List>
				<Item>
					<Button
						color="black"
						background="yellow"
						hoverColor="white"
						hoverBackground="gray"
						onClick={() => navigate(routes.HOME)}
						width="100%"
					>
						Home
					</Button>
				</Item>
				<Item>
					<Button
						color="black"
						background="yellow"
						hoverColor="white"
						hoverBackground="gray"
						onClick={() => navigate(routes.PROFILE)}
						width="100%"
					>
						Profile
					</Button>
				</Item>
				<Item>
					<Button
						color="black"
						background="yellow"
						hoverColor="white"
						hoverBackground="gray"
						onClick={() => navigate(routes.GARAGE)}
						width="100%"
					>
						Garage
					</Button>
				</Item>
			</List>
		</>
	)
}

export default ActivationSuccess
