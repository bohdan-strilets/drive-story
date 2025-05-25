import { ReactNode } from 'react'

export type ActionButtonProps = {
	onClick: () => void
	label: string
	icon: ReactNode
	width?: string
	height?: string
	margin?: string
	iconSize?: string
	labelSize?: string
}

export type ButtonProps = Pick<ActionButtonProps, 'width' | 'height' | 'margin'>

export type IconWrapperProps = Pick<ActionButtonProps, 'iconSize'>

export type LabelProps = Pick<ActionButtonProps, 'labelSize'>
