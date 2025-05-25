import { FC } from 'react'

import { InitialAvatarProps } from '@/types/props/UI/InitialAvatarProps'

import { FirstLetter } from './InitialAvatar.styled'

const InitialAvatar: FC<InitialAvatarProps> = ({ name }) => {
	const latter = name.split('')[0]

	return (
		<FirstLetter>
			<p>{latter}</p>
		</FirstLetter>
	)
}

export default InitialAvatar
