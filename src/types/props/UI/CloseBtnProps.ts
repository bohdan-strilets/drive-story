import { ColorVariant } from '@/types/types/ColorVariant'
import { Coordinates } from '@/types/types/Coordinates'

export type CloseBtnProps = {
	onClose: () => void
	position: Coordinates
	variant: ColorVariant
}

export type ButtonProps = Pick<CloseBtnProps, 'position' | 'variant'>
