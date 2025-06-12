import { FC } from 'react'

import Loader from '@/components/UI/Loader'
import Overlay from '@/components/UI/Overlay'

import { OverlayActionsProps } from '@/types/props/Gallery/OverlayActionsProps'

import { ControllerButton, Item, Label, List } from './OverlayActions.styled'

const OverlayActions: FC<OverlayActionsProps> = ({
	imageUrl,
	overlayActions,
	isProcessing,
}) => {
	return (
		<Overlay>
			<List>
				{overlayActions.map(({ id, callback, icon, label }) => (
					<Item key={id}>
						<ControllerButton
							type="button"
							onClick={() => callback(imageUrl)}
							disabled={isProcessing}
						>
							{icon}
							<Label>{label}</Label>
						</ControllerButton>
					</Item>
				))}
			</List>

			{isProcessing && <Loader color="black" margin="10px 0" size={22} />}
		</Overlay>
	)
}

export default OverlayActions
