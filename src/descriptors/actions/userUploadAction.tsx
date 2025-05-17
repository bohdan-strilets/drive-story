import { BsImageFill } from 'react-icons/bs'
import { MdImagesearchRoller } from 'react-icons/md'

import { modalNames } from '@/config/modalConfig'

import { ActionContext, ActionDescriptor } from '@/types/types/ActionDescriptor'

export const userUploadAction: ActionDescriptor<ActionContext>[] = [
	{
		key: 'upload-avatar',
		label: 'Upload avatar',
		icon: <BsImageFill />,
		getCallback:
			({ onOpen }) =>
			() =>
				onOpen(modalNames.UPLOAD_AVATAR),
	},
	{
		key: 'upload-poster',
		label: 'Upload poster',
		icon: <MdImagesearchRoller />,
		getCallback:
			({ onOpen }) =>
			() =>
				onOpen(modalNames.UPLOAD_POSTER),
	},
]
