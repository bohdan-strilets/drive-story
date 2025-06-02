import { GiBroom } from 'react-icons/gi'
import {
	MdCloudUpload,
	MdContactEmergency,
	MdDelete,
	MdModeEdit,
} from 'react-icons/md'

import { modalNames } from '@/config/modalConfig'

import { ActionDescriptor, ActionParams } from '@/types/types/ActionDescriptor'

export const getInsuranceActions = ({
	onOpen,
}: ActionParams): ActionDescriptor[] => [
	{
		key: 'upload-insurance-photo',
		label: 'Upload photo',
		icon: <MdCloudUpload size={20} />,
		callback: () => onOpen(modalNames.UPLOAD_INSURANCE_PHOTO),
	},
	{
		key: 'clear-gallery',
		label: 'Clear gallery',
		icon: <GiBroom size={20} />,
		callback: () => onOpen(modalNames.CLEAR_INSURANCE_GALLERY),
	},
	{
		key: 'edit-insurance',
		label: 'Edit insurance',
		icon: <MdModeEdit size={20} />,
		callback: () => onOpen(modalNames.EDIT_INSURANCE),
	},
	{
		key: 'bind-contact',
		label: 'Bind contact',
		icon: <MdContactEmergency size={20} />,
		callback: () => onOpen(modalNames.BIND_INSURANCE_CONTACT),
	},
	{
		key: 'delete-insurance',
		label: 'Delete insurance',
		icon: <MdDelete size={20} />,
		callback: () => onOpen(modalNames.DELETE_INSURANCE),
	},
]
