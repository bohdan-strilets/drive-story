import { FC } from 'react'
import { useNavigate } from 'react-router-dom'

import ButtonGoBack from '@/components/UI/ButtonGoBack'
import DecorativeLine from '@/components/UI/DecorativeLine'
import ImageBox from '@/components/UI/ImageBox'
import Paragraph from '@/components/UI/Paragraph'
import Title from '@/components/UI/Title'

import useResponsive from '@/hooks/ui/useResponsive'

import { routes } from '@/config/routes'

import { parsedDateToString } from '@/utils/parsedDateToString'

import { HeaderProps } from '@/types/props/Garage/HeaderProps'

const Header: FC<HeaderProps> = ({
	carPoster,
	carName,
	shortName,
	carId,
	updatedDate,
	description,
}) => {
	const { maxMobile } = useResponsive()
	const navigate = useNavigate()

	return (
		<>
			<ButtonGoBack
				label="garage"
				onClick={() => navigate(routes.GARAGE)}
				margin="0 0 5px 0"
				color="black"
			/>
			<ImageBox
				imageUrl={carPoster}
				width="100%"
				height={maxMobile ? '140px' : '240px'}
				padding={maxMobile ? '15px' : '30px'}
				isShadow={true}
				gradient="var(--black-transparent-gradient)"
			>
				<Title
					fontSize={maxMobile ? 20 : 44}
					textAlign={'left'}
					color="white"
					type="h1"
				>
					{carName}
				</Title>
				<Title
					fontSize={maxMobile ? 16 : 24}
					textAlign={'left'}
					color="white"
					type="h2"
				>
					{shortName}
				</Title>
			</ImageBox>
			<Paragraph color="black" fontSize={12} textAlign="right" margin="5px 0">
				ID: {carId}
			</Paragraph>
			<Paragraph color="black" fontSize={12} textAlign="right">
				Latest changes: {parsedDateToString(updatedDate)}
			</Paragraph>
			<DecorativeLine type="dashed" color="#ccc" margin="10px 0" />
			<Title fontSize={maxMobile ? 20 : 28} textAlign="left" color="black">
				Story
			</Title>
			<Paragraph color="black" margin=" 15px 0" padding="10px 10px 10px 40px">
				{description || 'A little story about your car...'}
			</Paragraph>
		</>
	)
}

export default Header
