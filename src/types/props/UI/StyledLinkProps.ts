import { ThemeColor } from '@/types/types/ThemeColor'

export type StyledLinkProps = {
	path: string
	label: string
	color: ThemeColor
	hoverColor: ThemeColor
	margin?: string
}

export type CustomLinkProps = Pick<
	StyledLinkProps,
	'color' | 'hoverColor' | 'margin'
>
