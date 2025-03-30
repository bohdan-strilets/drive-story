import { FC } from 'react'

import { AccountActionsProps } from '@/types/props/Profile/AccountActionsProps'

import { fadeSlide } from '@/animations/fadeSlide'

import { Button, Item, Label } from './AccountActions.styled'

const AccountActions: FC<AccountActionsProps> = ({ actions }) => {
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

export default AccountActions
