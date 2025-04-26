import { FC } from 'react'

import { PropertyListProps } from '@/types/props/Layout/PropertyListProps'

import { Item, List, Property, Value } from './PropertyList.styled'

const PropertyList: FC<PropertyListProps> = ({ elements }) => {
	return (
		<List>
			{elements.map(({ property, value, id }) => (
				<Item key={id}>
					<Property>{property}:</Property>
					<Value>{value}</Value>
				</Item>
			))}
		</List>
	)
}

export default PropertyList
