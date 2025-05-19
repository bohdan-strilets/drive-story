import { BsImageFill } from 'react-icons/bs'
import { MdImagesearchRoller } from 'react-icons/md'

import { modalNames } from '@/config/modalConfig'

import { ActionDescriptor, ActionParams } from '@/types/types/ActionDescriptor'

export const getUserUploadActions = ({
	onOpen,
}: ActionParams): ActionDescriptor[] => [
	{
		key: 'upload-avatar',
		label: 'Upload avatar',
		icon: <BsImageFill size={20} />,
		callback: () => onOpen(modalNames.UPLOAD_AVATAR),
	},
	{
		key: 'upload-poster',
		label: 'Upload poster',
		icon: <MdImagesearchRoller size={20} />,
		callback: () => onOpen(modalNames.UPLOAD_POSTER),
	},
]
