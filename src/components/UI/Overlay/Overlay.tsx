import { FC } from 'react'

import { OverlayProps } from '@/types/props/UI/OverlayProps'

import { Wrapper } from './Overlay.styled'

const Overlay: FC<OverlayProps> = ({ children }) => {
	return <Wrapper className="overlay">{children}</Wrapper>
}

export default Overlay
