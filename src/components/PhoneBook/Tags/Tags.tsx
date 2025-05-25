import { FC } from 'react'

import Paragraph from '@/components/UI/Paragraph'

import { TagsProps } from '@/types/props/PhoneBook/TagsProps'

import { Item, List, Wrapper } from './Tags.styled'

const Tags: FC<TagsProps> = ({ tags, length = 3 }) => {
	return (
		<Wrapper>
			<List>
				{tags.slice(0, length).map((item) => (
					<Item key={item}>
						<Paragraph
							color="black"
							background="yellow"
							fontSize={10}
							padding="0 5px"
						>
							{item}
						</Paragraph>
					</Item>
				))}
			</List>
			{tags.length > length && (
				<Paragraph color="black" margin="0 0 0 3px">
					...
				</Paragraph>
			)}
		</Wrapper>
	)
}

export default Tags
