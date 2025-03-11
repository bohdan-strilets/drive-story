import { ButtonProps } from './ButtonProps'

export type UserBarProps = {
	email: string
	avatarUrl: string
	name?: string
	width?: string
} & Pick<ButtonProps, 'color' | 'hoverColor' | 'background' | 'hoverBackground'>

export type WrapperProps = Pick<UserBarProps, 'width'>
