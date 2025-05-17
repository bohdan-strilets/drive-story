import { FC } from 'react'

import AccentText from '@/components/UI/AccentText'
import DecorativeLine from '@/components/UI/DecorativeLine'
import Paragraph from '@/components/UI/Paragraph'
import Title from '@/components/UI/Title'

import useResponsive from '@/hooks/ui/useResponsive'

import { parsedDateToString } from '@/utils/parsedDateToString'

import { HeaderProps } from '@/types/props/Insurance/HeaderProps'

import { Wrapper } from './Header.styled'

const Header: FC<HeaderProps> = ({
	carId,
	insurerName,
	policyNumber,
	insuranceId,
	updatedAt,
}) => {
	const { maxMobile } = useResponsive()

	return (
		<Wrapper>
			<Title
				fontSize={maxMobile ? 20 : 44}
				textAlign={'left'}
				color="black"
				type="h1"
			>
				{insurerName}
			</Title>

			<AccentText color="green" fontSize={14} fontWeight="600">
				Policy number: {policyNumber}
			</AccentText>

			<Paragraph color="gray" fontSize={12} textAlign="right" margin="5px 0">
				ID: {insuranceId}
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
