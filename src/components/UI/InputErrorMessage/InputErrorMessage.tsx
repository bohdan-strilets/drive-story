import { FC } from 'react'

import { InputErrorMessageProps } from '@/types/props/UI/InputErrorMessageProps'

import { Message } from './InputErrorMessage.styled'

const InputErrorMessage: FC<InputErrorMessageProps> = ({ error }) => {
	return error && <Message role="alert">{error?.message}</Message>
}

export default InputErrorMessage
