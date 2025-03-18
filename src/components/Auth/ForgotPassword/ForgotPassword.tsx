import { FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import Button from '@/components/UI/Button'
import Paragraph from '@/components/UI/Paragraph'
import TextInput from '@/components/UI/TextInput'

import {
	ForgotPasswordFields,
	ForgotPasswordValidation,
} from '@/validation/ForgotPasswordSchema'

const ForgotPassword: FC = () => {
	const { control, handleSubmit } = useForm<ForgotPasswordFields>(
		ForgotPasswordValidation
	)

	const onSubmit: SubmitHandler<ForgotPasswordFields> = async (data) => {
		try {
			console.log(data)
			console.log('Email sand successfully.')
		} catch (error) {
			console.log(error)
		}
	}

	return (
		<>
			<Paragraph color="black" margin="0 0 20px 0">
				Once you provide your email address, a password reset email will be sent
				to your inbox. This email will contain a link that will allow you to
				reset your password securely.
			</Paragraph>
			<form onSubmit={handleSubmit(onSubmit)}>
				<TextInput<ForgotPasswordFields>
					control={control}
					label="Email"
					name="email"
					type="email"
					width="100%"
					margin="0 0 15px 0"
					placeholder="madison.carter@gmail.com"
					rules={{ required: true }}
					defaultValue=""
				/>
				<Button
					background="yellow"
					color="black"
					hoverBackground="gray"
					hoverColor="white"
					width="100%"
					type="submit"
				>
					send
				</Button>
			</form>
		</>
	)
}

export default ForgotPassword
