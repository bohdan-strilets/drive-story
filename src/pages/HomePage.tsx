import { AnimatePresence } from 'motion/react'
import { FC, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

import ResendEmail from '@/components/Auth/ResendEmail'
import WelcomeMessage from '@/components/Auth/WelcomeMessage'
import Modal from '@/components/Modal'

import useModal from '@/hooks/ui/useModal'

import { modalNames } from '@/config/modalConfig'

const HomePage: FC = () => {
	const { checkQueryParam, onOpen } = useModal()
	const { state } = useLocation()

	useEffect(() => {
		if (state?.openModal === modalNames.WELCOME) {
			onOpen(modalNames.WELCOME)
		}
	}, [onOpen, state?.openModal])

	return (
		<>
			<p>
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem facilis
				commodi ipsum dolore ea odit, libero mollitia perferendis tempore iusto,
				exercitationem possimus in et illo officiis magnam id. Consequatur,
				ullam.
			</p>
			<p>
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam atque
				corporis aliquam magnam. Incidunt porro sapiente praesentium quod culpa,
				fuga eligendi ipsum autem consequuntur labore. Recusandae exercitationem
				deserunt nam nemo!
			</p>

			<AnimatePresence>
				{checkQueryParam(modalNames.RESEND_EMAIL) && (
					<Modal title="Resend activation email">
						<ResendEmail showButtonGoBack={true} />
					</Modal>
				)}

				{checkQueryParam(modalNames.WELCOME) && (
					<Modal title="Welcome">
						<WelcomeMessage />
					</Modal>
				)}
			</AnimatePresence>
		</>
	)
}

export default HomePage
