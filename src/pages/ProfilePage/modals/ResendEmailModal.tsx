import { FC } from 'react'

import ResendEmail from '@/components/Auth/ResendEmail'
import Modal from '@/components/Modal'

import useModal from '@/hooks/ui/useModal'

import { modalNames } from '@/config/modalConfig'

const ResendEmailModal: FC = () => {
	const { checkQueryParam } = useModal()

	return (
		checkQueryParam(modalNames.RESEND_EMAIL) && (
			<Modal title="Resend activation email">
				<ResendEmail />
			</Modal>
		)
	)
}

export default ResendEmailModal
