import { FC } from 'react'
import { useParams } from 'react-router-dom'

import Gallery from '@/components/Gallery'
import ActionMenu from '@/components/Layout/ActionMenu'
import PropertyList from '@/components/Layout/PropertyList'
import Loader from '@/components/UI/Loader'
import Title from '@/components/UI/Title'

import { useGetByIdCar } from '@/hooks/car/useGetByIdCar'
import { useGetImage } from '@/hooks/ui/useGetImage'
import useModal from '@/hooks/ui/useModal'
import useResponsive from '@/hooks/ui/useResponsive'

import { carActionDescriptors } from '@/descriptors/carActionDescriptors'
import { carOverviewDescriptors } from '@/descriptors/carOverviewDescriptors'
import { carOwnershipHistoryDescriptors } from '@/descriptors/carOwnershipHistoryDescriptors'
import { carRegistrationDetailsDescriptors } from '@/descriptors/carRegistrationDetailsDescriptors'
import { carTechnicalSpecsDescriptors } from '@/descriptors/carTechnicalSpecsDescriptors'

import { defaultImages } from '@/utils/defaultImages'

import { isImage } from '@/types/guards/isImage'
import { ActionContext } from '@/types/types/ActionDescriptor'

import {
	Container,
	InformationWrapper,
	SideMenu,
} from './CarInformation.styled'
import Header from './Header'
import MaintenanceReminders from './MaintenanceReminders'

const CarInformation: FC = () => {
	const { carId } = useParams()
	const { maxMobile } = useResponsive()

	const { onOpen, modalNames } = useModal()
	const actionCtx: ActionContext = { onOpen, modalNames }

	const { data: car, isLoading, isError } = useGetByIdCar(carId ?? '')

	const photos = car?.photos
	const carPoster = useGetImage({
		image: photos,
		defaultImage: defaultImages.poster,
	})

	if (isLoading) {
		return <Loader color="gray" />
	}

	if (isError) {
		return <p>Car with current ID was not selected.</p>
	}

	return (
		car &&
		!isError && (
			<article>
				<Header
					carPoster={carPoster}
					carName={`${car?.basicInfo?.make} ${car?.basicInfo?.model}`}
					shortName={car?.basicInfo?.shortName}
					carId={carId}
					updatedDate={car?.updatedAt}
					description={car?.description}
				/>

				<MaintenanceReminders />

				{photos && isImage(photos) && (
					<>
						<Title
							fontSize={maxMobile ? 20 : 28}
							textAlign="left"
							color="black"
						>
							Gallery
						</Title>
						<Gallery
							images={photos.resources}
							overlayActions={[]}
							isActionLoading={false}
							itemsPerPage={maxMobile ? 3 : 6}
							itemHeight="240px"
						/>
					</>
				)}

				<Container>
					<InformationWrapper>
						<Title
							fontSize={maxMobile ? 20 : 28}
							textAlign="left"
							color="black"
						>
							Basic information
						</Title>
						<PropertyList
							descriptors={carOverviewDescriptors}
							context={car?.basicInfo}
						/>

						<Title
							fontSize={maxMobile ? 20 : 28}
							textAlign="left"
							color="black"
						>
							Specifications
						</Title>
						<PropertyList
							descriptors={carTechnicalSpecsDescriptors}
							context={car.specifications}
						/>

						<Title
							fontSize={maxMobile ? 20 : 28}
							textAlign="left"
							color="black"
						>
							Registration details
						</Title>
						<PropertyList
							descriptors={carRegistrationDetailsDescriptors}
							context={car.registration}
						/>

						<Title
							fontSize={maxMobile ? 20 : 28}
							textAlign="left"
							color="black"
						>
							Owner details
						</Title>
						<PropertyList
							descriptors={carOwnershipHistoryDescriptors}
							context={car.ownership}
						/>
					</InformationWrapper>

					<SideMenu>
						<ActionMenu
							descriptors={carActionDescriptors}
							context={actionCtx}
						/>
					</SideMenu>
				</Container>
			</article>
		)
	)
}

export default CarInformation
