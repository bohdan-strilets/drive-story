import { FC } from 'react'
import { FaLocationDot, FaPhone } from 'react-icons/fa6'
import { IoMdContacts } from 'react-icons/io'
import { MdDelete } from 'react-icons/md'
import { generatePath, useNavigate } from 'react-router-dom'

import Button from '@/components/UI/Button'
import DecorativeLine from '@/components/UI/DecorativeLine'
import Loader from '@/components/UI/Loader'
import Paragraph from '@/components/UI/Paragraph'

import { routes } from '@/config/routes'

import { formatPhoneNumber } from '@/utils/formatPhoneNumber'

import { ContactWidgetProps } from '@/types/props/PhoneBook/ContactWidgetProps'

import { getColor } from '@/styles/helpers/getColor'

import { Header, Item, Placeholder, Wrapper } from './ContactWidget.styled'

const ContactWidget: FC<ContactWidgetProps> = ({
	clearContact,
	isCleaning,
	entityId,
	contact,
	margin = '',
}) => {
	const navigate = useNavigate()

	const path = generatePath(routes.CONTACT_BY_ID, {
		contactId: contact?._id || '',
	})

	const removeLink = async () => {
		await clearContact(entityId)
	}

	if (!contact || !contact._id) {
		return (
			<Placeholder margin={margin}>
				<IoMdContacts color={getColor('gray')} size={20} />
				<Paragraph color="gray" padding="15px">
					Contact is not linked yet
				</Paragraph>
			</Placeholder>
		)
	}

	return (
		<Wrapper margin={margin} onClick={() => navigate(path)}>
			<Header>
				<Paragraph color="black" fontWeight={700} fontSize={20}>
					{contact.name}
				</Paragraph>
				<Button
					onClick={removeLink}
					color="white"
					background="gray"
					hoverColor="white"
					hoverBackground="black"
					width="24px"
					height="24px"
					style={{
						position: 'absolute',
						top: 0,
						right: 0,
					}}
				>
					<MdDelete size={14} color={getColor('white')} />
				</Button>
			</Header>

			<DecorativeLine color={getColor('black')} type="dashed" margin="5px 0" />

			<ul>
				<Item>
					<FaPhone color={getColor('black')} />
					<Paragraph color="black" margin="0 0 0 10px">
						{formatPhoneNumber(contact.phone)}
					</Paragraph>
				</Item>
				<Item>
					<FaLocationDot color={getColor('black')} />
					<Paragraph color="black" margin="0 0 0 10px">
						{contact.address.country} {contact.address.city}
					</Paragraph>
				</Item>
			</ul>

			{isCleaning && <Loader color="gray" />}
		</Wrapper>
	)
}

export default ContactWidget
