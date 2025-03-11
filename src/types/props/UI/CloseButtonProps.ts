import { Coordinates } from '@/types/types/Coordinates'
import { ThemeColor } from '@/types/types/ThemeColor'

export type CloseButtonProps = {
	onClose: () => void
	position: Coordinates
	color: ThemeColor
	hoverColor: ThemeColor
}

export type ButtonProps = Pick<
	CloseButtonProps,
	'position' | 'color' | 'hoverColor'
>
