import { AnimatePresence } from 'motion/react'
import { FC } from 'react'

import Auth from '@/components/Auth'
import Modal from '@/components/Modal'

import useModal from '@/hooks/useModal'

const AuthPage: FC = () => {
	const { checkQueryParam, modalNames } = useModal()

	return (
		<>
			<Auth />
			<AnimatePresence>
				{checkQueryParam(modalNames.FORGOT_PASSWORD) && (
					<Modal title="Example modal">
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt
						sit in obcaecati debitis libero dicta natus numquam. Tenetur
						molestias ipsum vitae alias voluptas, harum eum reiciendis culpa
						odit, repellendus earum. Lorem ipsum dolor sit amet consectetur
						adipisicing elit. Animi tenetur, dignissimos deserunt nulla eaque
						accusamus commodi cum sequi deleniti. Recusandae nemo beatae,
						temporibus voluptate molestias nisi? Atque iure harum beatae
						quaerat, doloribus at voluptatibus, officiis voluptas corrupti
						dignissimos repellat architecto omnis, optio fuga
					</Modal>
				)}
			</AnimatePresence>
		</>
	)
}

export default AuthPage
