import { FC } from 'react'
import { useParams } from 'react-router-dom'

import ActionMenu from '@/components/Layout/ActionMenu'
import PropertyList from '@/components/Layout/PropertyList'
import Loader from '@/components/UI/Loader'
import Title from '@/components/UI/Title'

import { useCarInformation } from '@/hooks/ui/useCarInformation'
import useResponsive from '@/hooks/ui/useResponsive'

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
	const {
		isLoading,
		isError,
		carPoster,
		carName,
		shortName,
		updatedDate,
		description,
		basicInfoList,
		specificationsList,
		registrationList,
		ownershipList,
		carActions,
	} = useCarInformation(carId as string)

	if (isLoading) {
		return <Loader color="gray" />
	}

	if (isError) {
		return <p>Car with current ID was not selected.</p>
	}

	return (
		!isError && (
			<article>
				<Header
					carPoster={carPoster}
					carName={carName}
					shortName={shortName}
					carId={carId}
					updatedDate={updatedDate}
					description={description}
				/>

				<MaintenanceReminders />

				<Container>
					<InformationWrapper>
						<Title
							fontSize={maxMobile ? 20 : 28}
							textAlign="left"
							color="black"
						>
							Basic information
						</Title>
						<PropertyList elements={basicInfoList} />

						<Title
							fontSize={maxMobile ? 20 : 28}
							textAlign="left"
							color="black"
						>
							Specifications
						</Title>
						<PropertyList elements={specificationsList} />

						<Title
							fontSize={maxMobile ? 20 : 28}
							textAlign="left"
							color="black"
						>
							Registration details
						</Title>
						<PropertyList elements={registrationList} />

						<Title
							fontSize={maxMobile ? 20 : 28}
							textAlign="left"
							color="black"
						>
							Owner details
						</Title>
						<PropertyList elements={ownershipList} />
					</InformationWrapper>

					<SideMenu>
						<ActionMenu actions={carActions} />
					</SideMenu>
				</Container>
			</article>
		)
	)
}

export default CarInformation
