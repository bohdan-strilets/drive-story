import { Coordinates } from '@/types/types/Coordinates'

export type CloseBtnProps = {
	onClose: () => void
	position: Coordinates
}

export type ButtonProps = Pick<CloseBtnProps, 'position'>
