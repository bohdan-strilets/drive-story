import { Coordinates } from '@/types/types/Coordinates'
import { ThemeColor } from '@/types/types/ThemeColor'

export type CloseBtnProps = {
	onClose: () => void
	position: Coordinates
	variant: ThemeColor
}

export type ButtonProps = Pick<CloseBtnProps, 'position' | 'variant'>
