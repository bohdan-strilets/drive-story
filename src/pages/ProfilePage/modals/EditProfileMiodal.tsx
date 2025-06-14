import { FC } from 'react'

import Modal from '@/components/Modal'
import EditProfile from '@/components/Profile/EditProfile'

import useModal from '@/hooks/ui/useModal'

import { modalNames } from '@/config/modalConfig'

import { EditProfileMiodalProps } from '@/types/props/Profile/EditProfileMiodalProps'

const EditProfileMiodal: FC<EditProfileMiodalProps> = ({ user }) => {
	const { checkQueryParam } = useModal()

	return (
		checkQueryParam(modalNames.EDIT_PROFILE) &&
		user && (
			<Modal title="Edit profile">
				<EditProfile user={user} />
			</Modal>
		)
	)
}

export default EditProfileMiodal
