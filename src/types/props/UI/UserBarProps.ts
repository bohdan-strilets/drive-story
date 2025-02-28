import { ButtonProps } from './ButtonProps'

export type UserBarProps = {
	email: string
	avatarUrl: string
	logoutBtnColor: ButtonProps['variant']
	name?: string
	width?: string
}

export type WrapperProps = Pick<UserBarProps, 'width'>
