export type InitialAvatarProps = {
	name: string
	width?: string
	height?: string
	margin?: string
	fontSize?: number
}

export type FirstLetterProps = {
	background: string
} & Pick<InitialAvatarProps, 'width' | 'height' | 'margin' | 'fontSize'>
