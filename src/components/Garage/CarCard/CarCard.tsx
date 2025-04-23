import { FC } from 'react'

import Button from '@/components/UI/Button'
import ImageBox from '@/components/UI/ImageBox'

import { defaultImages } from '@/utils/defaultImages'

import { CarCardProps } from '@/types/props/Garage/CarCardProps'

import {
	Header,
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
	posterUrl,
	make,
	model,
	year,
	bodyType,
	mileage,
	engineVolume,
	fuelType,
	trnasmission,
}) => {
	return (
		<Wrapper>
			<ImageBox
				imageUrl={posterUrl || defaultImages.photo}
				width="100%"
				height="200px"
				size="cover"
			/>
			<Information>
				<Header>
					<Name>
						{make} {model}
					</Name>
					<Year>{year}</Year>
				</Header>
				<List>
					<Item>
						<Label>Body type</Label>
						<Value>{bodyType}</Value>
					</Item>
					<Item>
						<Label>Milage</Label>
						<Value>{mileage} KM</Value>
					</Item>
					<Item>
						<Label>Engine</Label>
						<Value>
							{engineVolume}L {fuelType}
						</Value>
					</Item>
					<Item>
						<Label>Transmission</Label>
						<Value>{trnasmission}</Value>
					</Item>
				</List>
			</Information>
			<Button
				color="black"
				background="yellow"
				hoverColor="white"
				hoverBackground="black"
				width="100%"
			>
				View details
			</Button>
		</Wrapper>
	)
}

export default CarCard
