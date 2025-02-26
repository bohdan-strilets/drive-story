import { FC } from 'react'

import { routes } from '../helpers/routes'

import { Item, List, StyledLink } from './PolicyNavigation.styled'

const PolicyNavigation: FC = () => {
	return (
		<List>
			<Item>
				<StyledLink to={routes.PRIVACY_POLICY}>Privacy policy</StyledLink>
			</Item>
			<Item>
				<StyledLink to={routes.TERMS_USE}>Terms of use</StyledLink>
			</Item>
		</List>
	)
}

export default PolicyNavigation
