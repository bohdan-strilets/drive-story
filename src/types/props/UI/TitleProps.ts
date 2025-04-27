import { ReactNode } from 'react'

import { TextAlign } from '@/types/types/TextAlign'
import { ThemeColor } from '@/types/types/ThemeColor'

export type TitleProps = {
	children: ReactNode
	fontSize: number
	textAlign: TextAlign
	color: ThemeColor
	type?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
	margin?: string
}

export type StyledTitleProps = Pick<
	TitleProps,
	'fontSize' | 'color' | 'margin' | 'textAlign'
>
