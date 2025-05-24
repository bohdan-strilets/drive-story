import { FC } from 'react'

import Gallery from '@/components/Gallery'
import ActionMenu from '@/components/Layout/ActionMenu'
import PropertyList from '@/components/Layout/PropertyList'
import DecorativeLine from '@/components/UI/DecorativeLine'
import Title from '@/components/UI/Title'

import useModal from '@/hooks/ui/useModal'
import useResponsive from '@/hooks/ui/useResponsive'

import { getInspectionActions } from '@/descriptors/actions/getInspectionActions'
import { inspectionField } from '@/descriptors/fields/inspectionField'

import { isImage } from '@/types/guards/isImage'
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
	imageActions,
	isActionLoading,
}) => {
	const { onOpen } = useModal()
	const { maxMobile } = useResponsive()

	const photos = inspection?.photos
	const actions = getInspectionActions({ onOpen })

	return (
		<article>
			<Header
				carId={inspection.carId}
				inspectionId={inspection._id}
				updatedAt={inspection.updatedAt}
			/>

			{photos && isImage(photos) && (
				<>
					<Title fontSize={maxMobile ? 20 : 28} textAlign="left" color="black">
						Gallery
					</Title>
					<Gallery
						images={photos.resources}
						overlayActions={imageActions}
						isActionLoading={isActionLoading}
						itemsPerPage={maxMobile ? 3 : 6}
						itemHeight="240px"
						isOverlay={true}
					/>
					<DecorativeLine color="gray" type="dashed" margin="20px 0" />
				</>
			)}

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
				</SideMenu>
			</Container>
		</article>
	)
}

export default InspectionInfo
