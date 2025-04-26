import { FC } from 'react'

import { AccentTextProps } from '@/types/props/UI/AccentTextProps'

import { Text } from './AccentText.styled'

const AccentText: FC<AccentTextProps> = ({
	children,
	color = 'yellow',
	fontWeight = '700',
	fontSize = 16,
	margin = '',
}) => {
	return (
		<Text
			color={color}
			fontWeight={fontWeight}
			fontSize={fontSize}
			margin={margin}
		>
			{children}
		</Text>
	)
}

export default AccentText
