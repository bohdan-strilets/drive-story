import { FC } from 'react'

import { navigation } from '@/descriptors/actions/navigation'

import { NavigationProps } from '@/types/props/Menu/NavigationProps'

import { fadeSlide } from '@/animations/fadeSlide'

import { Item, Label, List, StyledLink } from './Navigation.styled'

const Navigation: FC<NavigationProps> = ({ closeMenu, margin, itemHeight }) => {
	return (
		<List margin={margin}>
			{navigation.map(({ key, label, route, icon }, index) => {
				return (
					<Item
						key={key}
						{...fadeSlide(0, -20, index * 0.1, 0.5)}
						itemHeight={itemHeight}
					>
						<StyledLink to={route} onClick={closeMenu}>
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
