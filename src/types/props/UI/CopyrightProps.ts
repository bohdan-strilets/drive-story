import { TextAlign } from '@/types/types/TextAlign'

export type CopyrightProps = {
	margin?: string
	textAlign?: TextAlign
}

export type TextProps = Pick<CopyrightProps, 'margin' | 'textAlign'>
