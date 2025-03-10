export type StyledLinkProps = {
	path: string
	label: string
	margin?: string
}

export type CustomLinkProps = Pick<StyledLinkProps, 'margin'>
