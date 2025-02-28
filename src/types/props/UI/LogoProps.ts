export type LogoProps = {
	color: 'black' | 'yellow' | 'white'
	variant: 'small' | 'large'
}

export type TitleProps = Pick<LogoProps, 'color' | 'variant'>

export type WheelIconProps = Pick<LogoProps, 'color' | 'variant'>

export type SubtitleProps = Pick<LogoProps, 'color' | 'variant'>
