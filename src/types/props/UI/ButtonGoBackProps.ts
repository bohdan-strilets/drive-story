export type ButtonGoBackProps = {
	label: string
	onClick: () => void
	margin?: string
}

export type ButtonProps = Pick<ButtonGoBackProps, 'margin'>
