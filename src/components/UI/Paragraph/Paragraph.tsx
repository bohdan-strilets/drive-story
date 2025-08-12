import { FC } from 'react'

import { ParagraphProps } from '@/types/props/UI/ParagraphProps'

import { Text } from './Paragraph.styled'

const Paragraph: FC<ParagraphProps> = ({
	children,
	color = 'black',
	background = '',
	fontSize = 16,
	fontWeight = 400,
	margin = '',
	padding = '',
	lineHeight = 1.7,
	textAlign = 'left',
	...props
}) => {
	return (
		<Text
			color={color}
			background={background}
			fontSize={fontSize}
			fontWeight={fontWeight}
			margin={margin}
			padding={padding}
			lineHeight={lineHeight}
			textAlign={textAlign}
			{...props}
		>
			{children}
		</Text>
	)
}

export default Paragraph
