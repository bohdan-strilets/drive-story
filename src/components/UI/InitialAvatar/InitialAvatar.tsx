import { FC } from 'react'

import { stringToColor } from '@/utils/stringToColor'

import { InitialAvatarProps } from '@/types/props/UI/InitialAvatarProps'

import { FirstLetter } from './InitialAvatar.styled'

const InitialAvatar: FC<InitialAvatarProps> = ({
	name,
	width = '50px',
	height = '50px',
	margin = '',
	fontSize = 28,
}) => {
	const letter = name.split('')[0]
	const bg = stringToColor(letter)

	return (
		<FirstLetter
			background={bg}
			width={width}
			height={height}
			margin={margin}
			fontSize={fontSize}
		>
			<p>{letter}</p>
		</FirstLetter>
	)
}

export default InitialAvatar
