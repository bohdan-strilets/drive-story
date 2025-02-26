export type LogoProps = {
	color: 'black' | 'yellow' | 'white'
	size: 'small' | 'large'
}

export type TitleProps = Pick<LogoProps, 'color' | 'size'>

export type WheelIconProps = Pick<LogoProps, 'color' | 'size'>

export type SubtitleProps = Pick<LogoProps, 'color' | 'size'>
