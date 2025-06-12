import { FC } from 'react'

import ActionMenu from '@/components/Layout/ActionMenu'
import ImageGallery from '@/components/Layout/ImageGallery'
import PropertyList from '@/components/Layout/PropertyList'
import ContactWidget from '@/components/PhoneBook/ContactWidget'

import useModal from '@/hooks/ui/useModal'

import { getInspectionActions } from '@/descriptors/actions/getInspectionActions'
import { inspectionField } from '@/descriptors/fields/inspectionField'

import { isContact } from '@/types/guards/isContact'
import { InspectionInfoProps } from '@/types/props/Inspection/InspectionInfoProps'

import Header from '../Header'
import Timer from '../Timer'

import {
	Container,
	InformationWrapper,
	SideMenu,
} from './InspectionInfo.styled'

const InspectionInfo: FC<InspectionInfoProps> = ({
	inspection,
	overlayActions,
	isProcessing,
	clearContact,
	isCleaning,
}) => {
	const { onOpen } = useModal()

	const photos = inspection?.photos
	const actions = getInspectionActions({ onOpen })
	const contact = isContact(inspection.contactId)
		? inspection.contactId
		: undefined

	return (
		<article>
			<Header
				carId={inspection.carId}
				inspectionId={inspection._id}
				updatedAt={inspection.updatedAt}
			/>

			<ImageGallery
				photos={photos}
				overlayActions={overlayActions}
				isProcessing={isProcessing}
			/>

			<Container>
				<InformationWrapper>
					<Timer
						startDate={inspection.inspectionDate}
						endDate={inspection.nextInspectionDate}
					/>

					<PropertyList descriptors={inspectionField} context={inspection} />
				</InformationWrapper>
				<SideMenu>
					<ActionMenu descriptors={actions} />

					<ContactWidget
						clearContact={clearContact}
						isCleaning={isCleaning}
						entityId={inspection._id}
						contact={contact}
						margin="15px 0 0 0"
					/>
				</SideMenu>
			</Container>
		</article>
	)
}

export default InspectionInfo
