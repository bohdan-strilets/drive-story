export type BigButtonProps = {
	onClick: () => void
	label: string
	width?: string
	height?: string
	margin?: string
	iconSize?: string
	labelSize?: string
}

export type ButtonProps = Pick<BigButtonProps, 'width' | 'height' | 'margin'>

export type IconWrapperProps = Pick<BigButtonProps, 'iconSize'>

export type LabelProps = Pick<BigButtonProps, 'labelSize'>
