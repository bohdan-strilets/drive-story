import { FC } from 'react'
import { useNavigate } from 'react-router-dom'

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

import { useUserStore } from '@/store/useUserStore'

import { defaultImages } from '@/utils/defaultImages'

import { CarInformationProps } from '@/types/props/Garage/CarInformationProps'

import Dimensions from '../Dimensions'
import Header from '../Header'
import ImageGallery from '../ImageGallery'
import LicensePlate from '../LicensePlate'
import MaintenanceAlerts from '../MaintenanceAlerts'

import {
	Container,
	InformationWrapper,
	SideMenu,
} from './CarInformation.styled'

const CarInformation: FC<CarInformationProps> = ({
	car,
	imageActions,
	isActionLoading,
	trims,
}) => {
	const { maxMobile } = useResponsive()
	const { onOpen } = useModal()
	const navigate = useNavigate()

	const user = useUserStore((state) => state.user)

	const photos = car.photos
	const carPoster = useGetImage({
		image: photos,
		defaultImage: defaultImages.poster,
	})
	const isCurrentCar = user?.currentCar === car._id

	const actions = getCarActions({
		onOpen,
		navigate,
		carId: car._id,
		insuranceId: car.insurance?.insuranceId || null,
		inspectionId: car.inspection?.inspectionId || null,
	})

	return (
		<article>
			<Header
				carPoster={carPoster}
				carMake={car.basicInfo.make}
				carModel={car.basicInfo.model}
				shortName={car.basicInfo.shortName}
				carId={car._id}
				updatedDate={car.updatedAt}
				description={car.description}
				isCurrentCar={isCurrentCar}
				countryName={trims?.make_country}
			/>

			<MaintenanceAlerts
				carId={car._id}
				insurance={car.insurance}
				inspection={car.inspection}
				oilService={null}
			/>

			<ImageGallery
				photos={photos}
				imageActions={imageActions}
				isActionLoading={isActionLoading}
			/>

			<Container>
				<InformationWrapper>
					<Title fontSize={maxMobile ? 20 : 28} textAlign="left" color="black">
						Basic information
					</Title>
					<PropertyList descriptors={carOverview} context={car.basicInfo} />

					<Title fontSize={maxMobile ? 20 : 28} textAlign="left" color="black">
						Specifications
					</Title>
					<PropertyList descriptors={carSpecs} context={car.specifications} />

					<Title fontSize={maxMobile ? 20 : 28} textAlign="left" color="black">
						Registration details
					</Title>
					<PropertyList
						descriptors={carRegistration}
						context={car.registration}
					/>

					<Title fontSize={maxMobile ? 20 : 28} textAlign="left" color="black">
						Owner details
					</Title>
					<PropertyList descriptors={carOwnership} context={car.ownership} />
				</InformationWrapper>

				<SideMenu>
					<ActionMenu descriptors={actions} />

					{car.registration.regNumber && (
						<LicensePlate
							licensePlate={car.registration.regNumber}
							margin="15px 0"
						/>
					)}

					{trims && (
						<Dimensions
							length={trims?.model_length_mm ?? 0}
							height={trims?.model_height_mm ?? 0}
							wheelbase={trims?.model_wheelbase_mm ?? 0}
							weight={trims?.model_weight_kg ?? 0}
						/>
					)}
				</SideMenu>
			</Container>
		</article>
	)
}

export default CarInformation
