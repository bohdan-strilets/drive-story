import { FC } from 'react'

import { TitleProps } from '@/types/props/UI/TitleProps'

import { StyledTitle } from './Title.styled'

const Title: FC<TitleProps> = ({
	children,
	type: Tag = 'h1',
	fontSize,
	color = 'yellow',
	textAlign = 'left',
	margin,
}) => {
	return (
		<StyledTitle
			as={Tag}
			fontSize={fontSize}
			textAlign={textAlign}
			color={color}
			margin={margin}
		>
			{children}
		</StyledTitle>
	)
}

export default Title
