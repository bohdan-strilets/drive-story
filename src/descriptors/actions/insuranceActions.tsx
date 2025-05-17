import { GiBroom } from 'react-icons/gi'
import {
	MdCloudUpload,
	MdContactEmergency,
	MdDelete,
	MdModeEdit,
} from 'react-icons/md'

import { ActionContext, ActionDescriptor } from '@/types/types/ActionDescriptor'

export const insuranceActions: ActionDescriptor<ActionContext>[] = [
	{
		key: 'upload-car-photo',
		label: 'Upload photo',
		icon: <MdCloudUpload size={20} />,
		getCallback:
			({ onOpen, modalNames }) =>
			() =>
				onOpen(modalNames.UPLOAD_INSURANCE_PHOTO),
	},
	{
		key: 'clear-gallery',
		label: 'Clear gallery',
		icon: <GiBroom size={20} />,
		getCallback:
			({ onOpen, modalNames }) =>
			() =>
				onOpen(modalNames.CLEAR_INSURANCE_GALLERY),
	},
	{
		key: 'edit-insurance',
		label: 'Edit insurance',
		icon: <MdModeEdit size={20} />,
		getCallback:
			({ onOpen, modalNames }) =>
			() =>
				onOpen(modalNames.EDIT_INSURANCE_POLICY),
	},
	{
		key: 'bind-contact',
		label: 'Bind contact',
		icon: <MdContactEmergency size={20} />,
		getCallback: () => () => null,
	},
	{
		key: 'delete-insurance',
		label: 'Delete insurance',
		icon: <MdDelete size={20} />,
		getCallback:
			({ onOpen, modalNames }) =>
			() =>
				onOpen(modalNames.DELETE_iNSURANCE_POLICY),
	},
]
