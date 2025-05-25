import { FaUserGear } from 'react-icons/fa6'
import { ImExit } from 'react-icons/im'
import { MdDelete, MdEmail } from 'react-icons/md'
import { RiLockPasswordFill } from 'react-icons/ri'

import { modalNames } from '@/config/modalConfig'

import { ActionDescriptor, ActionParams } from '@/types/types/ActionDescriptor'

export const getUserActions = ({
	onOpen,
}: ActionParams): ActionDescriptor[] => [
	{
		key: 'edit-email',
		label: 'Edit email',
		icon: <MdEmail size={20} />,
		callback: () => onOpen(modalNames.EDIT_EMAIL),
	},
	{
		key: 'edit-password',
		label: 'Edit password',
		icon: <RiLockPasswordFill size={20} />,
		callback: () => onOpen(modalNames.EDIT_PASSWORD),
	},
	{
		key: 'edit-profile',
		label: 'Edit profile',
		icon: <FaUserGear size={20} />,
		callback: () => onOpen(modalNames.EDIT_PROFILE),
	},
	{
		key: 'delete-profile',
		label: 'Delete profile',
		icon: <MdDelete size={20} />,
		callback: () => onOpen(modalNames.DELETE_PROFILE),
	},
	{
		key: 'exit-profile',
		label: 'Exit',
		icon: <ImExit size={20} />,
		callback: () => onOpen(modalNames.EXIT_PROFILE),
	},
]
