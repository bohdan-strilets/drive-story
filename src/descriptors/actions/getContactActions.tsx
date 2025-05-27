import { GiBroom } from 'react-icons/gi'
import { MdCloudUpload, MdDelete, MdModeEdit } from 'react-icons/md'

import { modalNames } from '@/config/modalConfig'

import { ActionDescriptor, ActionParams } from '@/types/types/ActionDescriptor'

export const getContactActions = ({
	onOpen,
}: ActionParams): ActionDescriptor[] => [
	{
		key: 'upload-contact-photo',
		label: 'Upload photo',
		icon: <MdCloudUpload size={20} />,
		callback: () => onOpen(modalNames.UPLOAD_CONTACT_PHOTO),
	},
	{
		key: 'clear-gallery',
		label: 'Clear gallery',
		icon: <GiBroom size={20} />,
		callback: () => onOpen(modalNames.CLEAR_CONTACT_GALLERY),
	},
	{
		key: 'edit-contact',
		label: 'Edit contact',
		icon: <MdModeEdit size={20} />,
		callback: () => onOpen(modalNames.EDIT_CONTACT),
	},
	{
		key: 'delete-contact',
		label: 'Delete contact',
		icon: <MdDelete size={20} />,
		callback: () => onOpen(modalNames.DELETE_CONTACT),
	},
]
