import { FC } from 'react'

import { Dot, Group, Wrapper } from './MenuIcon.styled'

const MenuIcon: FC = () => {
	return (
		<Wrapper>
			<Group style={{ marginBottom: '6px' }}>
				<Dot style={{ marginRight: '8px' }} />
				<Dot />
			</Group>
			<Group>
				<Dot style={{ marginRight: '8px' }} />
				<Dot />
			</Group>
		</Wrapper>
	)
}

export default MenuIcon
