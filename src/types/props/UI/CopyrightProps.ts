export type CopyrightProps = {
	margin?: string
	textAlign?: 'left' | 'center' | 'right'
}

export type TextProps = Pick<CopyrightProps, 'margin' | 'textAlign'>
