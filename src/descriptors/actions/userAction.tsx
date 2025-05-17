import { ImExit } from 'react-icons/im'
import { MdDelete, MdEmail } from 'react-icons/md'
import { RiLockPasswordFill, RiProfileFill } from 'react-icons/ri'

import { modalNames } from '@/config/modalConfig'

import { ActionContext, ActionDescriptor } from '@/types/types/ActionDescriptor'

export const userAction: ActionDescriptor<ActionContext>[] = [
	{
		key: 'edit-email',
		label: 'Edit email',
		icon: <MdEmail />,
		getCallback:
			({ onOpen }) =>
			() =>
				onOpen(modalNames.EDIT_EMAIL),
	},
	{
		key: 'edit-password',
		label: 'Edit password',
		icon: <RiLockPasswordFill />,
		getCallback:
			({ onOpen }) =>
			() =>
				onOpen(modalNames.EDIT_PASSWORD),
	},
	{
		key: 'edit-profile',
		label: 'Edit profile',
		icon: <RiProfileFill />,
		getCallback:
			({ onOpen }) =>
			() =>
				onOpen(modalNames.EDIT_PROFILE),
	},
	{
		key: 'delete-profile',
		label: 'Delete profile',
		icon: <MdDelete />,
		getCallback:
			({ onOpen }) =>
			() =>
				onOpen(modalNames.DELETE_PROFILE),
	},
	{
		key: 'exit-profile',
		label: 'Exit',
		icon: <ImExit />,
		getCallback:
			({ onOpen }) =>
			() =>
				onOpen(modalNames.EXIT_PROFILE),
	},
]
