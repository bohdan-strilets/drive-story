import { FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import toast from 'react-hot-toast'

import Button from '@/components/UI/Button'
import Loader from '@/components/UI/Loader'
import Paragraph from '@/components/UI/Paragraph'
import TextInput from '@/components/UI/TextInput'

import { useRequestResetPassword } from '@/hooks/user/useRequestResetPassword'

import { handleError } from '@/utils/handleError'

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

	const onSubmit: SubmitHandler<ForgotPasswordFields> = async (data) => {
		try {
			const response = await requestResetPassword(data)

			if (!response.success) {
				toast.error(
					response.message || 'Something went wrong, please try again'
				)
				return
			}

			toast.success('The letter has been sent successfully')
		} catch (error) {
			handleError(error)
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
