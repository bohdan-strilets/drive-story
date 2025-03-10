import { FC } from 'react'

import { navigationItems } from '@/config/navigationItems'

import { NavigationProps } from '@/types/props/Menu/NavigationProps'

import { fadeSlide } from '@/animations/fadeSlide'

import { Item, Label, List, StyledLink } from './Navigation.styled'

const Navigation: FC<NavigationProps> = ({ margin, itemHeight }) => {
	return (
		<List margin={margin}>
			{navigationItems.map(({ id, icon, label, route }, index) => {
				return (
					<Item
						key={id}
						{...fadeSlide(0, -20, index * 0.1, 0.5)}
						itemHeight={itemHeight}
					>
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
