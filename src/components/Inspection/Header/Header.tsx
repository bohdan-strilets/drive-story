import { FC } from 'react'

import DecorativeLine from '@/components/UI/DecorativeLine'
import Paragraph from '@/components/UI/Paragraph'
import Title from '@/components/UI/Title'

import useResponsive from '@/hooks/ui/useResponsive'

import { parsedDateToString } from '@/utils/parsedDateToString'

import { HeaderProps } from '@/types/props/Inspection/HeaderProps'

import { Wrapper } from './Header.styled'

const Header: FC<HeaderProps> = ({ inspectionId, carId, updatedAt }) => {
	const { maxMobile } = useResponsive()

	return (
		<Wrapper>
			<Title
				fontSize={maxMobile ? 20 : 44}
				textAlign={'left'}
				color="black"
				type="h1"
			>
				Technical inspection
			</Title>

			<Paragraph color="gray" fontSize={12} textAlign="right" margin="5px 0">
				ID: {inspectionId}
			</Paragraph>
			<Paragraph color="gray" fontSize={12} textAlign="right" margin="5px 0">
				Car ID: {carId}
			</Paragraph>
			<Paragraph color="green" fontSize={12} textAlign="right">
				Latest changes: {parsedDateToString(updatedAt)}
			</Paragraph>
			<DecorativeLine color="gray" type="dashed" />
		</Wrapper>
	)
}

export default Header
