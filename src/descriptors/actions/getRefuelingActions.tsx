import { GiBroom } from 'react-icons/gi'
import {
	MdCloudUpload,
	MdContactEmergency,
	MdDelete,
	MdModeEdit,
} from 'react-icons/md'

import { modalNames } from '@/config/modalConfig'

import { ActionDescriptor, ActionParams } from '@/types/types/ActionDescriptor'

export const getRefuelingActions = ({
	onOpen,
}: ActionParams): ActionDescriptor[] => [
	{
		key: 'upload-refueling-photo',
		label: 'Upload photo',
		icon: <MdCloudUpload size={20} />,
		callback: () => onOpen(modalNames.UPLOAD_PHOTO),
	},
	{
		key: 'clear-gallery',
		label: 'Clear gallery',
		icon: <GiBroom size={20} />,
		callback: () => onOpen(modalNames.CLEAR_GALLERY),
	},
	{
		key: 'edit-refueling',
		label: 'Edit refueling',
		icon: <MdModeEdit size={20} />,
		callback: () => onOpen(modalNames.EDIT_REFUELING),
	},
	{
		key: 'bind-contact',
		label: 'Bind contact',
		icon: <MdContactEmergency size={20} />,
		callback: () => onOpen(modalNames.BIND_CONTACT),
	},
	{
		key: 'delete-insurance',
		label: 'Delete refueling',
		icon: <MdDelete size={20} />,
		callback: () => onOpen(modalNames.DELETE_REFUELING),
	},
]
