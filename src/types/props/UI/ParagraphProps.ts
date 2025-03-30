import { ReactNode } from 'react'

import { TextAlign } from '@/types/types/TextAlign'
import { ThemeColor } from '@/types/types/ThemeColor'

export type ParagraphProps = {
	children: string | ReactNode
	color: ThemeColor
	fontSize?: number
	fontWeight?: number
	margin?: string
	padding?: string
	lineHeight?: number
	textAlign?: TextAlign
}

export type TextProps = Pick<
	ParagraphProps,
	| 'color'
	| 'fontSize'
	| 'fontWeight'
	| 'margin'
	| 'padding'
	| 'lineHeight'
	| 'textAlign'
>
