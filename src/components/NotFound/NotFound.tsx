import { FC } from 'react'
import { useNavigate } from 'react-router-dom'

import { routes } from '@/config/routes'

import { spring } from '@/animations/spring'

import Button from '../UI/Button'

import {
	Container,
	InfoText,
	StatusCode,
	Subtitle,
	Wrapper,
} from './NotFound.styled'

const NotFound: FC = () => {
	const navigate = useNavigate()

	return (
		<Wrapper>
			<Container>
				<StatusCode {...spring()}>404</StatusCode>
				<Subtitle>Page not found...</Subtitle>
			</Container>
			<Container>
				<InfoText>
					It seems we can't find the page you're looking for. The address may
					have changed or become outdated.
				</InfoText>
				<Button
					background="yellow"
					color="black"
					hoverBackground="gray"
					hoverColor="white"
					width="100%"
					onClick={() => navigate(routes.HOME)}
				>
					Go home page
				</Button>
			</Container>
		</Wrapper>
	)
}

export default NotFound
