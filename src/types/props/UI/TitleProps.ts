export type TitleProps = {
	children: string
	fontSize: number
	textAlign: 'left' | 'center' | 'right'
	variant: 'yellow' | 'black' | 'white' | 'gray'
	type?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
	margin?: string
}

export type StyledTitleProps = Pick<
	TitleProps,
	'fontSize' | 'variant' | 'margin' | 'textAlign'
>
