import { ThemeColor } from '@/types/types/ThemeColor'

export type LogoProps = {
	color: ThemeColor
	size: 'small' | 'large'
}

export type TitleProps = Pick<LogoProps, 'color' | 'size'>

export type WheelIconProps = Pick<LogoProps, 'color' | 'size'>

export type SubtitleProps = Pick<LogoProps, 'color' | 'size'>
