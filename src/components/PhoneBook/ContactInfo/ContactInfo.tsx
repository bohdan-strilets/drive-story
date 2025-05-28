import { FC } from 'react'

import AddressMap from '@/components/AddressMap'
import ActionMenu from '@/components/Layout/ActionMenu'
import PropertyList from '@/components/Layout/PropertyList'
import Title from '@/components/UI/Title'

import useModal from '@/hooks/ui/useModal'
import useResponsive from '@/hooks/ui/useResponsive'

import { getContactActions } from '@/descriptors/actions/getContactActions'
import { addressFields } from '@/descriptors/fields/addressFields'
import { contactFields } from '@/descriptors/fields/contactFields'

import { ContactInfoProps } from '@/types/props/PhoneBook/ContactInfoProps'

import Header from '../Header'
import ImageGallery from '../ImageGallery'

import { Container, InformationWrapper, SideMenu } from './ContactInfo.styled'

const ContactInfo: FC<ContactInfoProps> = ({
	contact,
	imageActions,
	isActionLoading,
}) => {
	const { onOpen } = useModal()
	const { maxMobile } = useResponsive()

	const photos = contact?.photos
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
				imageActions={imageActions}
				isActionLoading={isActionLoading}
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

					<AddressMap
						address={contact.address}
						height="400px"
						margin="20px 0 0 0"
						zoom={15}
					/>
				</SideMenu>
			</Container>
		</article>
	)
}

export default ContactInfo
