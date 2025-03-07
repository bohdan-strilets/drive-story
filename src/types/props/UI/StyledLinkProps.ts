export type StyledLinkProps = {
	path: string
	label: string
	margin?: string
}

export type WrapperProps = Pick<StyledLinkProps, 'margin'>
