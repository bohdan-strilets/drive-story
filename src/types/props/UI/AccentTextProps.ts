import { ReactNode } from 'react'

import { FontWeight } from '@/types/types/FontWeight'
import { ThemeColor } from '@/types/types/ThemeColor'

export type AccentTextProps = {
	children: string | ReactNode
	color: ThemeColor
	fontWeight?: FontWeight
	fontSize?: number
	margin?: string
}

export type TextProps = Pick<
	AccentTextProps,
	'color' | 'fontWeight' | 'fontSize' | 'margin'
>
