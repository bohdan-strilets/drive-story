import { FC } from 'react'
import { useParams } from 'react-router-dom'

import ImageBox from '@/components/UI/ImageBox'
import Loader from '@/components/UI/Loader'
import Paragraph from '@/components/UI/Paragraph'
import Title from '@/components/UI/Title'

import { useGetByIdCar } from '@/hooks/car/useGetByIdCar'

import { parsedDateToString } from '@/utils/parsedDateToString'

const CarInformation: FC = () => {
	const { carId } = useParams()
	const { data: car, isLoading, isError } = useGetByIdCar(carId as string)

	const basicInfo = car?.basicInfo
	const specifications = car?.specifications
	const engine = car?.specifications.engine
	const registration = car?.registration
	const ownership = car?.ownership

	if (isLoading) {
		return <Loader color="gray" />
	}

	if (isError) {
		return <p>Car with current ID was not selected.</p>
	}

	return (
		car && (
			<article>
				<ImageBox imageUrl={''} width={''} height={''} />
				<Paragraph color={'gray'}>Hello world</Paragraph>
				<div>
					<div>
						<Title fontSize={28} textAlign="left" color="black">
							Basic information
						</Title>
						<ul>
							<li>
								<p>Make:</p>
								<p>{basicInfo?.make}</p>
							</li>
							<li>
								<p>Model:</p>
								<p>{basicInfo?.model}</p>
							</li>
							<li>
								<p>Year:</p>
								<p>{basicInfo?.year}</p>
							</li>
							<li>
								<p>Short name:</p>
								<p>{basicInfo?.shortName}</p>
							</li>
							<li>
								<p>Generation:</p>
								<p>{basicInfo?.generation}</p>
							</li>
						</ul>

						<Title fontSize={28} textAlign="left" color="black">
							Specifications
						</Title>
						<ul>
							<li>
								<p>Mileage:</p>
								<p>{specifications?.mileage}</p>
							</li>
							<li>
								<p>Fuel type:</p>
								<p>{specifications?.fuelType}</p>
							</li>
							<li>
								<p>Transmission:</p>
								<p>{specifications?.transmission}</p>
							</li>
							<li>
								<p>Drivetrain:</p>
								<p>{specifications?.drivetrain}</p>
							</li>
							<li>
								<p>Body type:</p>
								<p>{specifications?.bodyType}</p>
							</li>
							<li>
								<p>Engine volume:</p>
								<p>{engine?.volume}</p>
							</li>
							<li>
								<p>Engine power:</p>
								<p>{engine?.power}</p>
							</li>
							<li>
								<p>Number of doors:</p>
								<p>{specifications?.doors}</p>
							</li>
							<li>
								<p>Number of seats:</p>
								<p>{specifications?.seats}</p>
							</li>
						</ul>

						<Title fontSize={28} textAlign="left" color="black">
							Registration details
						</Title>
						<ul>
							<li>
								<p>Vin number:</p>
								<p>{registration?.vin}</p>
							</li>
							<li>
								<p>Registration number:</p>
								<p>{registration?.regNumber}</p>
							</li>
							<li>
								<p>Date of first registration:</p>
								<p>{parsedDateToString(registration?.firstRegDate)}</p>
							</li>
						</ul>

						<Title fontSize={28} textAlign="left" color="black">
							Owner details
						</Title>
						<ul>
							<li>
								<p>Date of purchase:</p>
								<p>{parsedDateToString(ownership?.purchaseDate)}</p>
							</li>
							<li>
								<p>Date of sale:</p>
								<p>{parsedDateToString(ownership?.saleDate)}</p>
							</li>
						</ul>
					</div>
					<div></div>
				</div>
			</article>
		)
	)
}

export default CarInformation
