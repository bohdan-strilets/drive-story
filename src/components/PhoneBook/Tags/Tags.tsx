import { FC } from 'react'
import { FaDeleteLeft } from 'react-icons/fa6'

import Button from '@/components/UI/Button'
import Paragraph from '@/components/UI/Paragraph'

import { stringToColor } from '@/utils/stringToColor'

import { TagsProps } from '@/types/props/PhoneBook/TagsProps'

import { Item, Label, List, Wrapper } from './Tags.styled'

const Tags: FC<TagsProps> = ({
	tags,
	length = tags.length,
	mode = 'create',
	deleteTag,
}) => {
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

			{mode === 'edit' && (
				<Button
					onClick={deleteTag}
					color="white"
					background="red"
					hoverColor="white"
					hoverBackground="black"
					width="35px"
					height="18px"
					margin="0 0 3px 10px"
				>
					<FaDeleteLeft />
				</Button>
			)}

			{tags.length > length && (
				<Paragraph color="black" margin="0 0 0 3px">
					...
				</Paragraph>
			)}
		</Wrapper>
	)
}

export default Tags
