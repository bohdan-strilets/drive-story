import { ThemeColor } from '@/types/types/ThemeColor'

export type LogoProps = {
	color: ThemeColor
	scale: 'small' | 'large'
}

export type TitleProps = Pick<LogoProps, 'color' | 'scale'>

export type WheelIconProps = Pick<LogoProps, 'color' | 'scale'>

export type SubtitleProps = Pick<LogoProps, 'color' | 'scale'>
