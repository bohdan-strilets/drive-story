import { ThemeColor } from '@/types/types/ThemeColor'

export type LoaderProps = {
	margin?: string
	color: ThemeColor
	size?: number
}

export type WrapperProps = Pick<LoaderProps, 'margin'>

export type WheelIconProps = Pick<LoaderProps, 'size' | 'color'>
