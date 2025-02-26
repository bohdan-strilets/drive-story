import { FC } from 'react'

import { Text } from './Copyright.styled'

const Copyright: FC = () => {
	const currentYear = new Date().getFullYear()

	return <Text>© {currentYear} - Drive Story</Text>
}

export default Copyright
