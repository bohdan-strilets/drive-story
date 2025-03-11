import { ButtonHTMLAttributes, ReactNode } from 'react'

import { ThemeColor } from '@/types/types/ThemeColor'

export type ButtonProps = {
	children: ReactNode | string
	color: ThemeColor
	background: ThemeColor
	hoverColor: ThemeColor
	hoverBackground: ThemeColor
	type?: 'submit' | 'reset' | 'button'
	width?: string
	height?: string
	margin?: string
	padding?: string
	isShadow?: boolean
} & ButtonHTMLAttributes<HTMLButtonElement>

export type ButtonStyledProps = Pick<
	ButtonProps,
	| 'width'
	| 'height'
	| 'margin'
	| 'padding'
	| 'color'
	| 'background'
	| 'hoverColor'
	| 'hoverBackground'
	| 'isShadow'
>
