import { FC } from 'react'

import Paragraph from '@/components/UI/Paragraph'

import { stringToColor } from '@/utils/stringToColor'

import { TagsProps } from '@/types/props/PhoneBook/TagsProps'

import { Item, Label, List, Wrapper } from './Tags.styled'

const Tags: FC<TagsProps> = ({ tags, length = tags.length }) => {
	return (
		<Wrapper>
			<List>
				{tags.slice(0, length).map((item) => {
					const bg = stringToColor(item)

					return (
						<Item key={item}>
							<Paragraph
								color="black"
								background={bg}
								fontSize={10}
								padding="0 5px"
							>
								<Label>{item}</Label>
							</Paragraph>
						</Item>
					)
				})}
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
