import { FC } from 'react'

import { CharCounterProps } from '@/types/props/UI/CharCounterProps'

import { Container, Text, Wrapper } from './CharCounter.styled'

const CharCounter: FC<CharCounterProps> = ({ currentLength, maxLength }) => {
	return (
		<Wrapper>
			<Container>
				<Text>{currentLength}</Text>
				<Text style={{ margin: '0 5px' }}>/</Text>
				<Text>{maxLength}</Text>
			</Container>
		</Wrapper>
	)
}

export default CharCounter
