import { FC } from 'react'

import ImageBox from '@/components/UI/ImageBox'
import OpenGalleryButton from '@/components/UI/OpenGalleryButton'
import Title from '@/components/UI/Title'

import useModal from '@/hooks/ui/useModal'
import useResponsive from '@/hooks/ui/useResponsive'

import { modalNames } from '@/config/modalConfig'

import { HeaderProps } from '@/types/props/Profile/HeaderProps'

import { fadeIn } from '@/animations/fadeIn'

import { Wrapper } from './Header.styled'

const Header: FC<HeaderProps> = ({ posterUrl, fullName, nickname }) => {
	const { onOpen } = useModal()
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
					<Title
						fontSize={maxMobile ? 20 : 44}
						textAlign={'left'}
						color="white"
						type="h1"
					>
						{fullName}
					</Title>
					<Title
						fontSize={maxMobile ? 16 : 24}
						textAlign={'left'}
						color="white"
						type="h2"
					>
						{nickname || '---'}
					</Title>
				</ImageBox>
			</OpenGalleryButton>
		</Wrapper>
	)
}

export default Header
