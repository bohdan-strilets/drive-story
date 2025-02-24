export type LogoProps = {
	color: 'black' | 'yellow' | 'white'
	size: 'small' | 'large'
}

export type TitleProps = Pick<LogoProps, 'color'>

export type WheelIconProps = Pick<LogoProps, 'color'>

export type SubtitleProps = Pick<LogoProps, 'color'>

export type StyledLinkProps = Pick<LogoProps, 'size'>
