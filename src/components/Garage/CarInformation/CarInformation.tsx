import { FC } from 'react'
import { FaOilCan } from 'react-icons/fa'
import { IoNewspaper } from 'react-icons/io5'
import { MdMiscellaneousServices } from 'react-icons/md'
import { useParams } from 'react-router-dom'

import ActionMenu from '@/components/Layout/ActionMenu'
import PropertyList from '@/components/Layout/PropertyList'
import ImageBox from '@/components/UI/ImageBox'
import Loader from '@/components/UI/Loader'
import Paragraph from '@/components/UI/Paragraph'
import Title from '@/components/UI/Title'

import { useCarInformation } from '@/hooks/ui/useCarInformation'

import {
	Container,
	InformationWrapper,
	Name,
	ShortName,
	SideMenu,
	WarnItem,
	WarnList,
} from './CarInformation.styled'

const CarInformation: FC = () => {
	const { carId } = useParams()
	const {
		isLoading,
		isError,
		carPoster,
		carName,
		shortName,
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
				<ImageBox
					imageUrl={carPoster}
					width="100%"
					height="240px"
					padding="30px"
					isShadow={true}
					gradient="var(--black-transparent-gradient)"
				>
					<Name>{carName}</Name>
					<ShortName>{shortName}</ShortName>
				</ImageBox>
				<Paragraph color={'gray'} margin=" 15px 0">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
					neque quas molestiae, totam perferendis officiis? Ex facilis deleniti
					autem possimus doloribus consequuntur quidem culpa, perspiciatis non?
					Officia in soluta totam sit quisquam. Excepturi ipsam iusto odio
					tempore dolorum totam error illum vel consequuntur, repellat
					necessitatibus iure harum fugit nesciunt impedit?
				</Paragraph>

				<WarnList>
					<WarnItem>
						<p>Insurance policy</p>
						<IoNewspaper size={54} />
						<p>Ends in: 29.03.2026</p>
					</WarnItem>
					<WarnItem>
						<p>Technical inspection</p>
						<MdMiscellaneousServices size={54} />
						<p>Ends in: 25.03.2026</p>
					</WarnItem>
					<WarnItem>
						<p>Oil service</p>
						<FaOilCan size={54} />
						<p>Made: 15.03.2025</p>
					</WarnItem>
				</WarnList>

				<Container>
					<InformationWrapper>
						<Title fontSize={28} textAlign="left" color="black">
							Basic information
						</Title>
						<PropertyList elements={basicInfoList} />

						<Title fontSize={28} textAlign="left" color="black">
							Specifications
						</Title>
						<PropertyList elements={specificationsList} />

						<Title fontSize={28} textAlign="left" color="black">
							Registration details
						</Title>
						<PropertyList elements={registrationList} />

						<Title fontSize={28} textAlign="left" color="black">
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
