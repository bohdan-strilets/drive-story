import { FC } from 'react'

import { namesDaysWeek } from '@/utils/namesDaysWeek'

import { Item, Label, List } from './NamesDaysWeek.styled'

const NamesDaysWeek: FC = () => {
	return (
		<List>
			{namesDaysWeek.map(({ id, shortName }) => (
				<Item key={id}>
					<Label>{shortName}</Label>
				</Item>
			))}
		</List>
	)
}

export default NamesDaysWeek
