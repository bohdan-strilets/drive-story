import { FC } from 'react'

import { ContainerProps } from '@/types/props/Layout/ContainerProps'

import { Wrapper } from './Container.styled'

const Container: FC<ContainerProps> = ({ children }) => {
	return <Wrapper>{children}</Wrapper>
}

export default Container
