import { FC } from 'react'

import { stringToColor } from '@/utils/stringToColor'

import { InitialAvatarProps } from '@/types/props/UI/InitialAvatarProps'

import { FirstLetter } from './InitialAvatar.styled'

const InitialAvatar: FC<InitialAvatarProps> = ({ name }) => {
	const letter = name.split('')[0]
	const bg = stringToColor(letter)

	return (
		<FirstLetter background={bg}>
			<p>{letter}</p>
		</FirstLetter>
	)
}

export default InitialAvatar
