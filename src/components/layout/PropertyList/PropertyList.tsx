import { PropertyListProps } from '@/types/props/Layout/PropertyListProps'

import { fadeSlide } from '@/animations/fadeSlide'

import { Item, List, Property, Value } from './PropertyList.styled'

const PropertyList = <T,>({ descriptors, context }: PropertyListProps<T>) => {
	return (
		<List>
			{descriptors.map(({ key, label, render }, index) => (
				<Item key={key} {...fadeSlide(0, -20, 0.1 * index, 0.5)}>
					<Property>{label}:</Property>
					<Value>{render(context)}</Value>
				</Item>
			))}
		</List>
	)
}

export default PropertyList
