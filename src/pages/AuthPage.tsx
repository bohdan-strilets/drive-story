import { AnimatePresence } from 'motion/react'
import { FC } from 'react'

import Auth from '@/components/Auth'
import ForgotPassword from '@/components/Forms/ForgotPassword'
import Modal from '@/components/Modal'

import useModal from '@/hooks/ui/useModal'

const AuthPage: FC = () => {
	const { checkQueryParam, modalNames } = useModal()

	return (
		<>
			<Auth />
			<AnimatePresence>
				{checkQueryParam(modalNames.FORGOT_PASSWORD) && (
					<Modal title="Forgot your password?">
						<ForgotPassword />
					</Modal>
				)}
			</AnimatePresence>
		</>
	)
}

export default AuthPage
