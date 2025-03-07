import { useState } from 'react'
import { FieldValues } from 'react-hook-form'
import { IoIosEyeOff } from 'react-icons/io'
import { IoEyeSharp } from 'react-icons/io5'

import { PasswordInputProps } from '@/types/props/UI/PasswordInputProps'

import TextInput from '../TextInput'

import { Button } from './PasswordInput.styled'

const PasswordInput = <T extends FieldValues>({
	control,
	name,
	label,
	rules,
	defaultValue,
	placeholder,
	width,
	height,
	margin,
	padding,
}: PasswordInputProps<T>) => {
	const [type, setType] = useState<'password' | 'text'>('password')

	const onChangeType = () =>
		type === 'password' ? setType('text') : setType('password')

	return (
		<TextInput<T>
			control={control}
			type={type}
			name={name}
			label={label}
			rules={rules}
			defaultValue={defaultValue}
			placeholder={placeholder}
			width={width}
			height={height}
			margin={margin}
			padding={padding}
		>
			<Button type="button" onClick={onChangeType}>
				{type === 'password' ? <IoEyeSharp /> : <IoIosEyeOff />}
			</Button>
		</TextInput>
	)
}

export default PasswordInput
