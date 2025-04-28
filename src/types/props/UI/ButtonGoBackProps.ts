import { ThemeColor } from '@/types/types/ThemeColor'

export type ButtonGoBackProps = {
	label: string
	onClick: () => void
	margin?: string
	color?: ThemeColor | string
}

export type ButtonProps = Pick<ButtonGoBackProps, 'margin' | 'color'>
