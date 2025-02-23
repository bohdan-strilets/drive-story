import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react'

export type ButtonProps = {
	children: ReactNode | string
	variant: 'black' | 'yellow' | 'gray'
	width?: string
	margin?: string
} & DetailedHTMLProps<
	ButtonHTMLAttributes<HTMLButtonElement>,
	HTMLButtonElement
>

export type ButtonStyledProps = Pick<
	ButtonProps,
	'width' | 'margin' | 'variant'
>
