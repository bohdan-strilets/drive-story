import { FC } from 'react'

import OpenGalleryButton from '@/components/UI/OpenGalleryButton'

import useModal from '@/hooks/ui/useModal'

import { HeaderProps } from '@/types/props/Profile/HeaderProps'

import { fadeIn } from '@/animations/fadeIn'

import { FullName, Nickname, Poster, Wrapper } from './Header.styled'

const Header: FC<HeaderProps> = ({ posterUrl, fullName, nickname }) => {
	const { onOpen, modalNames } = useModal()

	return (
		<Wrapper>
			<OpenGalleryButton
				onClick={() => onOpen(modalNames.USER_POSTERS)}
				width="100%"
			>
				<Poster posterUrl={posterUrl} {...fadeIn()}>
					<FullName>{fullName}</FullName>
					<Nickname>{nickname || '---'}</Nickname>
				</Poster>
			</OpenGalleryButton>
		</Wrapper>
	)
}

export default Header
