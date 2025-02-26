import { ButtonHTMLAttributes, ReactNode } from 'react'

export type ButtonProps = {
	children: ReactNode | string
	variant: 'black' | 'yellow' | 'gray'
	width?: string
	margin?: string
} & ButtonHTMLAttributes<HTMLButtonElement>

export type ButtonStyledProps = Pick<
	ButtonProps,
	'width' | 'margin' | 'variant'
>
