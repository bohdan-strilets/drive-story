// src/descriptors/userActionDescriptors.ts
import { BsImageFill } from 'react-icons/bs'
import { MdImagesearchRoller } from 'react-icons/md'

import { ActionContext, ActionDescriptor } from '@/types/types/ActionDescriptor'

export const userUploadActionDescriptors: ActionDescriptor<ActionContext>[] = [
	{
		key: 'upload-avatar',
		label: 'Upload avatar',
		icon: <BsImageFill />,
		getCallback:
			({ onOpen, modalNames }) =>
			() =>
				onOpen(modalNames.UPLOAD_AVATAR),
	},
	{
		key: 'upload-poster',
		label: 'Upload poster',
		icon: <MdImagesearchRoller />,
		getCallback:
			({ onOpen, modalNames }) =>
			() =>
				onOpen(modalNames.UPLOAD_POSTER),
	},
]
