import { FC } from 'react'
import { FaGlobe, FaPhone } from 'react-icons/fa6'
import { MdEmail } from 'react-icons/md'

import ImageBox from '@/components/UI/ImageBox'
import InitialAvatar from '@/components/UI/InitialAvatar'
import Paragraph from '@/components/UI/Paragraph'

import useResponsive from '@/hooks/ui/useResponsive'

import { formatPhoneNumber } from '@/utils/formatPhoneNumber'

import { isImage } from '@/types/guards/isImage'
import { ContactCardProps } from '@/types/props/PhoneBook/ContactCardProps'

import { getColor } from '@/styles/helpers/getColor'

import Tags from '../Tags'

import {
	IconWithText,
	InfoContainer,
	NameContainer,
	Wrapper,
} from './ContactCard.styled'

const ContactCard: FC<ContactCardProps> = ({
	name,
	specializations,
	phone,
	email,
	website,
	photos,
}) => {
	const { minTablet, minLaptop } = useResponsive()

	const avatar = isImage(photos) && photos.selected

	return (
		<Wrapper>
			<NameContainer>
				{minTablet && (
					<>
						{avatar ? (
							<ImageBox
								imageUrl={avatar}
								width="65px"
								height="65px"
								margin="0 15px 0 0"
							/>
						) : (
							<InitialAvatar
								name={name}
								width="65px"
								height="65px"
								fontSize={28}
								margin="0 15px 0 0"
							/>
						)}
					</>
				)}

				<div>
					<Paragraph
						color="gray"
						fontSize={minLaptop ? 18 : 16}
						fontWeight={700}
					>
						{name}
					</Paragraph>
					{specializations && <Tags tags={specializations} length={3} />}
				</div>
			</NameContainer>

			<InfoContainer>
				<IconWithText>
					<FaPhone color={getColor('yellow')} size={14} />
					<Paragraph
						color="gray"
						fontWeight={500}
						margin="0 0 0 10px"
						fontSize={14}
					>
						{formatPhoneNumber(phone)}
					</Paragraph>
				</IconWithText>

				{email && (
					<IconWithText>
						<MdEmail color={getColor('yellow')} size={14} />
						<Paragraph color="gray" margin="0 0 0 10px" fontSize={14}>
							{email}
						</Paragraph>
					</IconWithText>
				)}

				{website && (
					<IconWithText>
						<FaGlobe color={getColor('yellow')} size={14} />
						<Paragraph
							color="gray"
							margin="0 0 0 10px"
							fontSize={14}
							style={{
								width: '200px',
								whiteSpace: 'nowrap',
								overflow: 'hidden',
								textOverflow: 'ellipsis',
							}}
						>
							{website}
						</Paragraph>
					</IconWithText>
				)}
			</InfoContainer>
		</Wrapper>
	)
}

export default ContactCard
