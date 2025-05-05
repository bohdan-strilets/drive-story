import { ActionMenuProps } from '@/types/props/Layout/ActionMenuProps'

import { fadeSlide } from '@/animations/fadeSlide'

import { Button, Item, Label } from './ActionMenu.styled'

const ActionMenu = <T,>({ descriptors, context }: ActionMenuProps<T>) => {
	return (
		<ul>
			{descriptors.map(({ key, label, icon, getCallback }, index) => (
				<Item key={key} {...fadeSlide(0, -20, 0.1 * index, 0.5)}>
					<Button type="button" onClick={getCallback(context)}>
						{icon}
						<Label>{label}</Label>
					</Button>
				</Item>
			))}
		</ul>
	)
}

export default ActionMenu
