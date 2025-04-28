import { FC } from 'react'

import { DecorativeLineProps } from '@/types/props/UI/DecorativeLineProps'

import { Line } from './DecorativeLine.styled'

const DecorativeLine: FC<DecorativeLineProps> = ({
	width = '100%',
	type = 'solid',
	height = 1,
	color = 'black',
	margin = '',
}) => {
	return (
		<Line
			width={width}
			type={type}
			height={height}
			color={color}
			margin={margin}
		/>
	)
}

export default DecorativeLine
