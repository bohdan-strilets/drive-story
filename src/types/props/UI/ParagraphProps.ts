import { HTMLAttributes, ReactNode } from 'react'

import { TextAlign } from '@/types/types/TextAlign'
import { ThemeColor } from '@/types/types/ThemeColor'

export type ParagraphProps = {
	children: string | ReactNode
	color: ThemeColor
	background?: ThemeColor | string
	fontSize?: number
	fontWeight?: number
	margin?: string
	padding?: string
	lineHeight?: number
	textAlign?: TextAlign
} & HTMLAttributes<HTMLParagraphElement>

export type TextProps = Pick<
	ParagraphProps,
	| 'color'
	| 'background'
	| 'fontSize'
	| 'fontWeight'
	| 'margin'
	| 'padding'
	| 'lineHeight'
	| 'textAlign'
>
