import { FC } from 'react'

import { HeaderProps } from '@/types/props/Profile/HeaderProps'

import { fadeIn } from '@/animations/fadeIn'

import { FullName, Nickname, Wrapper } from './Header.styled'

const Header: FC<HeaderProps> = ({ posterUrl, fullName, nickname }) => {
	return (
		<Wrapper posterUrl={posterUrl} {...fadeIn()}>
			<FullName>{fullName}</FullName>
			<Nickname>{nickname || '---'}</Nickname>
		</Wrapper>
	)
}

export default Header
