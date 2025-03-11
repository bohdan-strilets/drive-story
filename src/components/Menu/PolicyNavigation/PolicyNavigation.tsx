import { FC } from 'react'

import StyledLink from '@/components/UI/StyledLink'

import { routes } from '../../../config/routes'

import { Item, List } from './PolicyNavigation.styled'

const PolicyNavigation: FC = () => {
	return (
		<List>
			<Item>
				<StyledLink
					path={routes.PRIVACY_POLICY}
					label="Privacy policy"
					color="white"
					hoverColor="black"
				/>
			</Item>
			<Item>
				<StyledLink
					path={routes.TERMS_USE}
					label="Terms of use"
					color="white"
					hoverColor="black"
				/>
			</Item>
		</List>
	)
}

export default PolicyNavigation
