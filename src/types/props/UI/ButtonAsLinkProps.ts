import { ThemeColor } from '@/types/types/ThemeColor'

export type ButtonAsLinkProps = {
	onClick: () => void
	label: string
	color: ThemeColor
	hoverColor: ThemeColor
	margin?: string
}

export type ButtonProps = Pick<
	ButtonAsLinkProps,
	'color' | 'hoverColor' | 'margin'
>
