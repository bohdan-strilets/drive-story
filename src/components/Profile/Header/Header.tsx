import { FC } from 'react'

import ImageBox from '@/components/UI/ImageBox'
import OpenGalleryButton from '@/components/UI/OpenGalleryButton'

import useModal from '@/hooks/ui/useModal'
import useResponsive from '@/hooks/ui/useResponsive'

import { HeaderProps } from '@/types/props/Profile/HeaderProps'

import { fadeIn } from '@/animations/fadeIn'

import { FullName, Nickname, Wrapper } from './Header.styled'

const Header: FC<HeaderProps> = ({ posterUrl, fullName, nickname }) => {
	const { onOpen, modalNames } = useModal()
	const { maxMobile } = useResponsive()

	return (
		<Wrapper>
			<OpenGalleryButton
				onClick={() => onOpen(modalNames.USER_POSTERS)}
				width="100%"
			>
				<ImageBox
					imageUrl={posterUrl}
					width="100%"
					height={maxMobile ? '140px' : '240px'}
					padding={maxMobile ? '15px' : '30px'}
					gradient="var(--black-transparent-gradient)"
					{...fadeIn()}
				>
					<FullName>{fullName}</FullName>
					<Nickname>{nickname || '---'}</Nickname>
				</ImageBox>
			</OpenGalleryButton>
		</Wrapper>
	)
}

export default Header
