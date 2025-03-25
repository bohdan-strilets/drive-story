import { FC } from 'react'
import { ImExit } from 'react-icons/im'
import { MdDelete, MdEmail } from 'react-icons/md'
import { RiLockPasswordFill, RiProfileFill } from 'react-icons/ri'

import { fadeSlide } from '@/animations/fadeSlide'

import { Button, Item, Label } from './AccountActions.styled'

const AccountActions: FC = () => {
	return (
		<ul>
			<Item {...fadeSlide(0, -20, 0.1, 0.5)}>
				<Button type="button">
					<MdEmail />
					<Label>Edit email</Label>
				</Button>
			</Item>
			<Item {...fadeSlide(0, -20, 0.2, 0.5)}>
				<Button type="button">
					<RiLockPasswordFill />
					<Label>Edit password</Label>
				</Button>
			</Item>
			<Item {...fadeSlide(0, -20, 0.3, 0.5)}>
				<Button type="button">
					<RiProfileFill />
					<Label>Edit profile</Label>
				</Button>
			</Item>
			<Item {...fadeSlide(0, -20, 0.4, 0.5)}>
				<Button type="button">
					<MdDelete />
					<Label>Delete profile</Label>
				</Button>
			</Item>
			<Item {...fadeSlide(0, -20, 0.5, 0.5)}>
				<Button type="button">
					<ImExit />
					<Label>Exit</Label>
				</Button>
			</Item>
		</ul>
	)
}

export default AccountActions
