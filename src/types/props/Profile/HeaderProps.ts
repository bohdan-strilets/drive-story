export type HeaderProps = {
	posterUrl: string
	fullName: string
	nickname?: string | null
}

export type WrapperProps = Pick<HeaderProps, 'posterUrl'>
