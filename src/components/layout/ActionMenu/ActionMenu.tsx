import { FC } from 'react'

import { ActionMenuProps } from '@/types/props/Layout/ActionMenuProps'

import { fadeSlide } from '@/animations/fadeSlide'

import { Button, Item, Label } from './ActionMenu.styled'

const ActionMenu: FC<ActionMenuProps> = ({ actions }) => {
	return (
		<ul>
			{actions.map(({ id, label, callback, icon }, index) => (
				<Item key={id} {...fadeSlide(0, -20, 0.1 * index, 0.5)}>
					<Button type="button" onClick={callback}>
						{icon}
						<Label>{label}</Label>
					</Button>
				</Item>
			))}
		</ul>
	)
}

export default ActionMenu
