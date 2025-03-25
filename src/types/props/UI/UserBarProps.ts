export type UserBarProps = {
	width?: string
}

export type WrapperProps = Pick<UserBarProps, 'width'> & {
	posterUrl: string
}
