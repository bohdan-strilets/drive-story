import { FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import Button from '@/components/UI/Button'
import Loader from '@/components/UI/Loader'
import Paragraph from '@/components/UI/Paragraph'
import TextInput from '@/components/UI/TextInput'

import useSubmit from '@/hooks/ui/useSubmit'
import { useRequestResetPassword } from '@/hooks/user/useRequestResetPassword'

import { EmailDto } from '@/types/dto/EmailDto'
import { User } from '@/types/types/User'

import {
	ForgotPasswordFields,
	ForgotPasswordValidation,
} from '@/validation/ForgotPasswordSchema'

const ForgotPassword: FC = () => {
	const { mutateAsync: requestResetPassword, isPending } =
		useRequestResetPassword()

	const { control, handleSubmit } = useForm<ForgotPasswordFields>(
		ForgotPasswordValidation
	)

	const submitResetPasswordRequest = useSubmit<User | null, EmailDto>({
		callback: requestResetPassword,
		successMessage: 'The letter has been sent successfully',
	})

	const onSubmit: SubmitHandler<ForgotPasswordFields> = async (data) => {
		submitResetPasswordRequest(data)
	}

	return (
		<>
			<Paragraph background="white" color="black" margin="0 0 20px 0">
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
				{isPending && <Loader color="gray" margin="15px 0" />}
				<Button
					background="yellow"
					color="black"
					hoverBackground="gray"
					hoverColor="white"
					width="100%"
					type="submit"
					disabled={isPending}
				>
					{isPending ? '...' : 'send'}
				</Button>
			</form>
		</>
	)
}

export default ForgotPassword
