import { ButtonProps } from './ButtonProps'

export type UserBarProps = {
	width?: string
} & Pick<ButtonProps, 'color' | 'hoverColor' | 'background' | 'hoverBackground'>

export type WrapperProps = Pick<UserBarProps, 'width'>
