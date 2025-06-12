import { FC } from 'react'

import AddressMap from '@/components/AddressMap'
import ActionMenu from '@/components/Layout/ActionMenu'
import ImageGallery from '@/components/Layout/ImageGallery'
import PropertyList from '@/components/Layout/PropertyList'
import ImageBox from '@/components/UI/ImageBox'
import InitialAvatar from '@/components/UI/InitialAvatar'
import Title from '@/components/UI/Title'

import useModal from '@/hooks/ui/useModal'
import useResponsive from '@/hooks/ui/useResponsive'

import { getContactActions } from '@/descriptors/actions/getContactActions'
import { addressFields } from '@/descriptors/fields/addressFields'
import { contactFields } from '@/descriptors/fields/contactFields'

import { isImage } from '@/types/guards/isImage'
import { ContactInfoProps } from '@/types/props/PhoneBook/ContactInfoProps'

import Header from '../Header'

import { Container, InformationWrapper, SideMenu } from './ContactInfo.styled'

const ContactInfo: FC<ContactInfoProps> = ({
	contact,
	overlayActions,
	isProcessing,
}) => {
	const { onOpen } = useModal()
	const { maxMobile } = useResponsive()

	const photos = contact?.photos
	const avatar = isImage(photos) && photos.selected
	const actions = getContactActions({ onOpen })

	return (
		<article>
			<Header
				name={contact.name}
				_id={contact._id}
				updatedAt={contact.updatedAt}
				workingHours={contact.workingHours}
				specializations={contact.specializations}
				country={contact.address.country}
				city={contact.address.city}
			/>
			<ImageGallery
				photos={photos}
				overlayActions={overlayActions}
				isProcessing={isProcessing}
			/>
			<Container>
				<InformationWrapper>
					<PropertyList descriptors={contactFields} context={contact} />

					<Title
						fontSize={maxMobile ? 20 : 28}
						textAlign={'left'}
						color="black"
						type="h1"
					>
						Address
					</Title>
					<PropertyList descriptors={addressFields} context={contact.address} />
				</InformationWrapper>

				<SideMenu>
					<ActionMenu descriptors={actions} />

					{avatar ? (
						<ImageBox
							imageUrl={avatar}
							width="100%"
							height="250px"
							margin="20px 0"
						/>
					) : (
						<InitialAvatar
							name={contact.name}
							width="100%"
							height="250px"
							fontSize={120}
							margin="20px 0"
						/>
					)}

					<AddressMap address={contact.address} height="400px" zoom={15} />
				</SideMenu>
			</Container>
		</article>
	)
}

export default ContactInfo
