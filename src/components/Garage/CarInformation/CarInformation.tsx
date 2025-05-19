import { FC } from 'react'
import { useNavigate } from 'react-router-dom'

import Gallery from '@/components/Gallery'
import ActionMenu from '@/components/Layout/ActionMenu'
import PropertyList from '@/components/Layout/PropertyList'
import Title from '@/components/UI/Title'

import { useGetImage } from '@/hooks/ui/useGetImage'
import useModal from '@/hooks/ui/useModal'
import useResponsive from '@/hooks/ui/useResponsive'

import { getCarActions } from '@/descriptors/actions/getCarActions'
import { carOverview } from '@/descriptors/fields/carOverview'
import { carOwnership } from '@/descriptors/fields/carOwnership'
import { carRegistration } from '@/descriptors/fields/carRegistration'
import { carSpecs } from '@/descriptors/fields/carSpecs'

import { defaultImages } from '@/utils/defaultImages'

import { isImage } from '@/types/guards/isImage'
import { CarInformationProps } from '@/types/props/Garage/CarInformationProps'

import LicensePlate from '../LicensePlate'

import {
	Container,
	InformationWrapper,
	SideMenu,
} from './CarInformation.styled'
import Header from './Header'
import MaintenanceReminders from './MaintenanceReminders'

const CarInformation: FC<CarInformationProps> = ({
	car,
	imageActions,
	isActionLoading,
}) => {
	const { maxMobile } = useResponsive()

	const { onOpen } = useModal()
	const navigate = useNavigate()

	const photos = car?.photos
	const carPoster = useGetImage({
		image: photos,
		defaultImage: defaultImages.poster,
	})

	const actions = getCarActions({
		onOpen,
		navigate,
		carId: car?._id,
		insuranceId: car?.insuranceId || '',
		inspectionId: car?.inspectionId || '',
	})

	return (
		car && (
			<article>
				<Header
					carPoster={carPoster}
					carName={`${car?.basicInfo?.make} ${car?.basicInfo?.model}`}
					shortName={car?.basicInfo?.shortName}
					carId={car?._id}
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
							overlayActions={imageActions}
							isActionLoading={isActionLoading}
							itemsPerPage={maxMobile ? 3 : 6}
							itemHeight="240px"
							isOverlay={true}
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
						<PropertyList descriptors={carOverview} context={car?.basicInfo} />

						<Title
							fontSize={maxMobile ? 20 : 28}
							textAlign="left"
							color="black"
						>
							Specifications
						</Title>
						<PropertyList descriptors={carSpecs} context={car.specifications} />

						<Title
							fontSize={maxMobile ? 20 : 28}
							textAlign="left"
							color="black"
						>
							Registration details
						</Title>
						<PropertyList
							descriptors={carRegistration}
							context={car.registration}
						/>

						<Title
							fontSize={maxMobile ? 20 : 28}
							textAlign="left"
							color="black"
						>
							Owner details
						</Title>
						<PropertyList descriptors={carOwnership} context={car.ownership} />
					</InformationWrapper>

					<SideMenu>
						<ActionMenu descriptors={actions} />
						{car.registration.regNumber && (
							<LicensePlate licensePlate={car.registration.regNumber} />
						)}
					</SideMenu>
				</Container>
			</article>
		)
	)
}

export default CarInformation
