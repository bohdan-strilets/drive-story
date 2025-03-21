import { FC } from 'react'

import { LoaderProps } from '@/types/props/UI/LoaderProps'

import { WheelIcon, Wrapper } from './Loader.styled'

const Loader: FC<LoaderProps> = ({ margin, color = 'black', size = 40 }) => {
	return (
		<Wrapper margin={margin}>
			<WheelIcon color={color} size={size} />
		</Wrapper>
	)
}

export default Loader
