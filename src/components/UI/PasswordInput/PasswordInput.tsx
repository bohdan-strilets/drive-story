import { useState } from 'react'
import { FieldValues, Path } from 'react-hook-form'
import { IoIosEyeOff } from 'react-icons/io'
import { IoEyeSharp } from 'react-icons/io5'

import { PasswordInputProps } from '@/types/props/UI/PasswordInputProps'

import TextInput from '../TextInput'

import { Button } from './PasswordInput.styled'

const PasswordInput = <
	TFieldValues extends FieldValues,
	TName extends Path<TFieldValues>,
>({
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
	isShowCharCounter,
}: PasswordInputProps<TFieldValues, TName>) => {
	const [type, setType] = useState<'password' | 'text'>('password')

	const onChangeType = () =>
		type === 'password' ? setType('text') : setType('password')

	return (
		<TextInput
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
			isShowCharCounter={isShowCharCounter}
		>
			<Button type="button" onClick={onChangeType}>
				{type === 'password' ? <IoEyeSharp /> : <IoIosEyeOff />}
			</Button>
		</TextInput>
	)
}

export default PasswordInput
