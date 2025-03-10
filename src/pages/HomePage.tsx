import { AnimatePresence } from 'motion/react'
import { FC } from 'react'

import Modal from '@/components/Modal'
import Button from '@/components/UI/Button'

import useModal from '@/hooks/useModal'

const HomePage: FC = () => {
	const { checkQueryParam, modalNames, onOpen } = useModal()

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
			<Button variant="black" onClick={() => onOpen(modalNames.EXAMPLE)}>
				Open example modal
			</Button>
			<AnimatePresence>
				{checkQueryParam(modalNames.EXAMPLE) && (
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

export default HomePage
