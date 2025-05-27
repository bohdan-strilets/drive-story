import { FC } from 'react'
import { FaClock, FaLocationDot } from 'react-icons/fa6'
import { useNavigate } from 'react-router-dom'

import ButtonGoBack from '@/components/UI/ButtonGoBack'
import DecorativeLine from '@/components/UI/DecorativeLine'
import Paragraph from '@/components/UI/Paragraph'
import Title from '@/components/UI/Title'

import useResponsive from '@/hooks/ui/useResponsive'

import { routes } from '@/config/routes'

import { parsedDateToString } from '@/utils/parsedDateToString'

import { HeaderProps } from '@/types/props/PhoneBook/HeaderProps'

import { getColor } from '@/styles/helpers/getColor'

import Tags from '../Tags'

import { HoursContainer, Wrapper } from './Header.styled'

const Header: FC<HeaderProps> = ({
	name,
	workingHours,
	specializations,
	_id,
	updatedAt,
	country,
	city,
}) => {
	const { maxMobile } = useResponsive()
	const navigate = useNavigate()

	const hours = workingHours?.join(' - ')
	const location = `${country}, ${city}`

	return (
		<Wrapper>
			<ButtonGoBack
				label="phone book"
				onClick={() => navigate(routes.PHONE_BOOK)}
				margin="0 0 5px 0"
				color="black"
			/>

			<Title
				fontSize={maxMobile ? 20 : 44}
				textAlign={'left'}
				color="black"
				type="h1"
			>
				{name}
			</Title>

			<HoursContainer>
				<FaClock color={getColor('yellow`')} size={maxMobile ? 14 : 16} />
				<Paragraph
					color="gray"
					fontSize={maxMobile ? 12 : 16}
					margin={maxMobile ? '0 15px 0 5px' : '0 20px 0 10px'}
				>
					{hours}
				</Paragraph>
				<FaLocationDot color={getColor('yellow`')} size={maxMobile ? 14 : 16} />
				<Paragraph
					color="gray"
					fontSize={maxMobile ? 12 : 16}
					margin={maxMobile ? '0 0 0 5px' : '0 0 0 10px'}
				>
					{location}
				</Paragraph>
			</HoursContainer>

			<Tags tags={specializations || []} />

			<Paragraph color="gray" fontSize={12} textAlign="right" margin="5px 0">
				ID: {_id}
			</Paragraph>
			<Paragraph color="green" fontSize={12} textAlign="right">
				Latest changes: {parsedDateToString(updatedAt)}
			</Paragraph>
			<DecorativeLine color="gray" type="dashed" />
		</Wrapper>
	)
}

export default Header
