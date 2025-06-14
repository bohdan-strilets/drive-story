import { FC } from 'react'

import Modal from '@/components/Modal'
import Paragraph from '@/components/UI/Paragraph'

import useModal from '@/hooks/ui/useModal'
import useSubmit from '@/hooks/ui/useSubmit'
import { useRemoveProfile } from '@/hooks/user/useRemoveProfile'

import { modalNames } from '@/config/modalConfig'
import { routes } from '@/config/routes'

import { User } from '@/types/types/User'

const DeleteProfileModal: FC = () => {
	const { checkQueryParam, onClose } = useModal()

	const { mutateAsync: removeProfile, isPending } = useRemoveProfile()

	const deleteAndNavigate = useSubmit<User | null>({
		callback: removeProfile,
		navigateTo: routes.HOME,
		successMessage: 'The profile was successfully deleted',
	})

	return (
		checkQueryParam(modalNames.DELETE_PROFILE) && (
			<Modal
				key={modalNames.DELETE_PROFILE}
				title="Do you want to delete your profile?"
				isDialog={true}
				isLoading={isPending}
				negativeBtnLabel="no"
				positiveBtnLabel="yes"
				negativeCallback={onClose}
				positiveCallback={deleteAndNavigate}
			>
				<Paragraph color={'black'} margin="0 0 15px 0">
					Are you sure you want to permanently delete your profile and all
					associated data? Please be aware that this action is irreversible, and
					we will not be able to recover your account and information after
					deletion.
				</Paragraph>
				<Paragraph color={'red'}>
					All your personal information, uploaded files, and activity history
					will be lost forever.
				</Paragraph>
			</Modal>
		)
	)
}

export default DeleteProfileModal
