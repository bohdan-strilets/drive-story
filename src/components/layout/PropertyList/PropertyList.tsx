import { FC } from 'react'

import { PropertyListProps } from '@/types/props/Layout/PropertyListProps'

import { fadeSlide } from '@/animations/fadeSlide'

import { Item, List, Property, Value } from './PropertyList.styled'

const PropertyList: FC<PropertyListProps> = ({ elements }) => {
	return (
		<List>
			{elements.map(({ property, value, id }, index) => (
				<Item key={id} {...fadeSlide(0, -20, 0.1 * index, 0.5)}>
					<Property>{property}:</Property>
					<Value>{value}</Value>
				</Item>
			))}
		</List>
	)
}

export default PropertyList
