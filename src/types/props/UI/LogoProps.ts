export type LogoProps = {
	color: 'black' | 'yellow' | 'white'
}

export type TitleProps = Pick<LogoProps, 'color'>

export type WheelIconProps = Pick<LogoProps, 'color'>

export type SubtitleProps = Pick<LogoProps, 'color'>
