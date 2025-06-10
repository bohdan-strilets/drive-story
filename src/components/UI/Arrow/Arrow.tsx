import { FC } from 'react'

import { ArrowProps } from '@/types/props/UI/ArrowProps'

import { Value, Wrapper } from './Arrow.styled'

const Arrow: FC<ArrowProps> = ({
	value,
	orientation,
	position,
	color,
	width,
	height,
}) => {
	return (
		<Wrapper
			orientation={orientation}
			position={position}
			width={width}
			height={height}
			color={color}
		>
			<Value>{value}</Value>
		</Wrapper>
	)
}

export default Arrow
