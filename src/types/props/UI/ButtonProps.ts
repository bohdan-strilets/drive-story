import { ButtonHTMLAttributes, ReactNode } from 'react'

export type ButtonProps = {
	children: ReactNode | string
	variant: 'black' | 'yellow' | 'gray'
	type?: 'submit' | 'reset' | 'button'
	width?: string
	height?: string
	margin?: string
	padding?: string
} & ButtonHTMLAttributes<HTMLButtonElement>

export type ButtonStyledProps = Pick<
	ButtonProps,
	'width' | 'height' | 'margin' | 'padding' | 'variant'
>
