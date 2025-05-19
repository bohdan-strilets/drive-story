import { FC } from 'react'
import { FaRoad } from 'react-icons/fa6'
import { IoCarSportSharp } from 'react-icons/io5'
import { PiEngineFill } from 'react-icons/pi'
import { TbManualGearboxFilled } from 'react-icons/tb'
import { generatePath, useNavigate } from 'react-router-dom'

import Badge from '@/components/UI/Badge'
import Button from '@/components/UI/Button'
import ImageBox from '@/components/UI/ImageBox'

import { useGetImage } from '@/hooks/ui/useGetImage'

import { routes } from '@/config/routes'

import { convertEngineVolume } from '@/utils/convertEngineVolume'
import { defaultImages } from '@/utils/defaultImages'
import { formatNumberWithSpaces } from '@/utils/formatNumberWithSpaces'
import { formatLabel } from '@/utils/generateDropdownOptions'

import { CarCardProps } from '@/types/props/Garage/CarCardProps'

import { getColor } from '@/styles/helpers/getColor'

import {
	ButtonIcon,
	Header,
	IconWrapper,
	Information,
	Item,
	Label,
	List,
	Name,
	Value,
	Wrapper,
	Year,
} from './CarCard.styled'

const CarCard: FC<CarCardProps> = ({
	id,
	photos,
	make,
	model,
	year,
	bodyType,
	mileage,
	engineVolume,
	fuelType,
	trnasmission,
	isCurrentCar,
}) => {
	const navigate = useNavigate()
	const path = generatePath(routes.CAR_BY_ID, { carId: id })

	const carPoster = useGetImage({
		image: photos,
		defaultImage: defaultImages.poster,
	})

	return (
		<Wrapper>
			{isCurrentCar && <Badge label={'Current car'} />}
			<ImageBox imageUrl={carPoster} width="100%" height="200px" size="cover" />
			<Information>
				<Header>
					<Name>
						{make} {model}
					</Name>
					<Year>{year}</Year>
				</Header>
				<List>
					<Item>
						<IconWrapper>
							<IoCarSportSharp color={getColor('yellow')} />
							<Label>Body type</Label>
						</IconWrapper>
						<Value>{formatLabel(bodyType)}</Value>
					</Item>
					<Item>
						<IconWrapper>
							<FaRoad color={getColor('yellow')} />
							<Label>Mileage</Label>
						</IconWrapper>
						<Value>{formatNumberWithSpaces(mileage)} KM</Value>
					</Item>
					<Item>
						<IconWrapper>
							<PiEngineFill color={getColor('yellow')} />
							<Label>Engine</Label>
						</IconWrapper>
						<Value>
							{convertEngineVolume(engineVolume)}L {formatLabel(fuelType)}
						</Value>
					</Item>
					<Item>
						<IconWrapper>
							<TbManualGearboxFilled color={getColor('yellow')} />
							<Label>Transmission</Label>
						</IconWrapper>
						<Value>{formatLabel(trnasmission)}</Value>
					</Item>
				</List>
			</Information>
			<Button
				onClick={() => navigate(path)}
				color="black"
				background="yellow"
				hoverColor="white"
				hoverBackground="black"
				width="100%"
				height="50px"
			>
				View details
				<ButtonIcon />
			</Button>
		</Wrapper>
	)
}

export default CarCard
