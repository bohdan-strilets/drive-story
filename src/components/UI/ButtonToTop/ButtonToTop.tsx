import { FC, useEffect, useState } from 'react'
import { ImArrowUp } from 'react-icons/im'

import Button from '../Button/Button'

import { Wrapper } from './ButtonToTop.styled'

const ButtonToTop: FC = () => {
	const [visible, setVisible] = useState(false)

	useEffect(() => {
		const handleScroll = () => {
			setVisible(window.scrollY > 300)
		}
		window.addEventListener('scroll', handleScroll)
		return () => window.removeEventListener('scroll', handleScroll)
	}, [])

	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' })
	}

	return (
		<Wrapper visible={visible}>
			<Button
				onClick={scrollToTop}
				color="black"
				background="yellow"
				hoverColor="white"
				hoverBackground="gray"
				width="35px"
				height="35px"
				isShadow={true}
			>
				<ImArrowUp />
			</Button>
		</Wrapper>
	)
}

export default ButtonToTop
