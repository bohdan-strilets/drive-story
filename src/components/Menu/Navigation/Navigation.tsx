import { FC } from 'react'

import { NavigationProps } from '@/types/props/Menu/NavigationProps'

import { slideDownFadeIn } from '@/animations/slideDownFadeIn'

import { navigationItems } from '../helpers/navigationItems'

import { Item, Label, List, StyledLink } from './Navigation.styled'

const Navigation: FC<NavigationProps> = ({ margin }) => {
	return (
		<List margin={margin}>
			{navigationItems.map(({ id, icon, label, route }, index) => {
				return (
					<Item key={id} {...slideDownFadeIn(index * 0.1, 0.5)}>
						<StyledLink to={route}>
							{icon}
							<Label>{label}</Label>
						</StyledLink>
					</Item>
				)
			})}
		</List>
	)
}

export default Navigation
