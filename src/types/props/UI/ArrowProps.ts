import { Coordinates } from '@/types/types/Coordinates'
import { ThemeColor } from '@/types/types/ThemeColor'

export type ArrowProps = {
	value: string | number
	orientation: 'vertical' | 'horizontal'
	position: Coordinates
	color: ThemeColor
	width?: string
	height?: string
}

export type WrapperProps = Pick<
	ArrowProps,
	'orientation' | 'position' | 'width' | 'height' | 'color'
>
