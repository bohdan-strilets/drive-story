import { FC } from 'react'

import { CopyrightProps } from '@/types/props/UI/CopyrightProps'

import { Text } from './Copyright.styled'

const Copyright: FC<CopyrightProps> = ({ margin, textAlign = 'left' }) => {
	const currentYear = new Date().getFullYear()

	return (
		<Text margin={margin} textAlign={textAlign}>
			© {currentYear} - Drive Story
		</Text>
	)
}

export default Copyright
