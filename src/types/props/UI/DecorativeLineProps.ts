import { BorderType } from '@/types/types/BorderType'
import { ThemeColor } from '@/types/types/ThemeColor'

export type DecorativeLineProps = {
	width?: string
	type?: BorderType
	height?: number
	color?: ThemeColor | string
	margin?: string
}

export type LineProps = Pick<
	DecorativeLineProps,
	'width' | 'type' | 'height' | 'color' | 'margin'
>
