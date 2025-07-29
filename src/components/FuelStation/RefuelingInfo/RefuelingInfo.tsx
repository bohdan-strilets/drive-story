import { FC } from 'react'

import ActionMenu from '@/components/Layout/ActionMenu'
import ImageGallery from '@/components/Layout/ImageGallery'
import PropertyList from '@/components/Layout/PropertyList'
import ContactWidget from '@/components/PhoneBook/ContactWidget'
import DecorativeLine from '@/components/UI/DecorativeLine'
import ImageBox from '@/components/UI/ImageBox'
import Paragraph from '@/components/UI/Paragraph'

import useModal from '@/hooks/ui/useModal'
import useResponsive from '@/hooks/ui/useResponsive'

import station from '@/assets/fuelStation/station.webp'

import { getRefuelingActions } from '@/descriptors/actions/getRefuelingActions'
import { refuelingFields } from '@/descriptors/fields/refuelingFields'

import { getFuelLabel } from '@/utils/fuelMeta'
import { parsedDateToString } from '@/utils/parsedDateToString'

import { isContact } from '@/types/guards/isContact'
import { RefuelingInfoProps } from '@/types/props/Refueling/RefuelingInfoProps'

import { pulseGlow } from '@/animations/pulseGlow'

import {
	Container,
	FuelType,
	InformationWrapper,
	Price,
	SideMenu,
} from './RefuelingInfo.styled'

const RefuelingInfo: FC<RefuelingInfoProps> = ({
	refueling,
	overlayActions,
	isProcessing,
	clearContact,
	isCleaning,
}) => {
	const { onOpen } = useModal()
	const { maxMobile } = useResponsive()

	const glow = 'rgba(238, 205, 16,'

	const photos = refueling?.photos
	const actions = getRefuelingActions({ onOpen })
	const contact = isContact(refueling.contactId)
		? refueling.contactId
		: undefined

	return (
		<>
			<ImageBox
				imageUrl={station}
				width="100%"
				height={maxMobile ? '140px' : '240px'}
				isShadow={true}
			>
				<FuelType fuelType={refueling.fuelType} {...pulseGlow(glow)}>
					<p>{getFuelLabel(refueling.fuelType)}</p>
					<Price>{refueling.pricePerUnit} PLN</Price>
				</FuelType>
			</ImageBox>

			<Paragraph color="black" fontSize={12} textAlign="right" margin="5px 0">
				ID: {refueling._id}
			</Paragraph>

			<Paragraph color="black" fontSize={12} textAlign="right" margin="5px 0">
				Car ID: {refueling.carId}
			</Paragraph>

			<Paragraph color="green" fontSize={12} textAlign="right">
				Latest changes: {parsedDateToString(refueling.updatedAt)}
			</Paragraph>
			<DecorativeLine type="dashed" color="#ccc" margin="10px 0" />

			<ImageGallery
				photos={photos}
				overlayActions={overlayActions}
				isProcessing={isProcessing}
			/>

			<Container>
				<InformationWrapper>
					<PropertyList descriptors={refuelingFields} context={refueling} />
				</InformationWrapper>
				<SideMenu>
					<ActionMenu descriptors={actions} />

					<ContactWidget
						clearContact={clearContact}
						isCleaning={isCleaning}
						entityId={refueling._id}
						contact={contact}
						margin="15px 0 0 0"
					/>
				</SideMenu>
			</Container>
		</>
	)
}

export default RefuelingInfo
