import { motion } from 'motion/react'
import { FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useParams } from 'react-router-dom'

import Button from '@/components/UI/Button'
import Loader from '@/components/UI/Loader'
import Paragraph from '@/components/UI/Paragraph'
import PasswordInput from '@/components/UI/PasswordInput/PasswordInput'
import Title from '@/components/UI/Title'

import useSubmit from '@/hooks/ui/useSubmit'
import { useResetPassword } from '@/hooks/user/useResetPassword'

import { ResetPasswordDto } from '@/types/dto/ResetPasswordDto'
import { User } from '@/types/types/User'

import {
	ReccoverPasswordFields,
	ReccoverPasswordValidation,
} from '@/validation/ReccoverPasswordSchema'

import { fadeSlide } from '@/animations/fadeSlide'

import { Wrapper } from './RecoverPassword.styled'

const RecoverPassword: FC = () => {
	const { mutateAsync: resetPassword, isPending } = useResetPassword()
	const { resetToken } = useParams()

	const { control, handleSubmit } = useForm<ReccoverPasswordFields>(
		ReccoverPasswordValidation
	)

	const submitResetPassword = useSubmit<
		User | null,
		{ dto: ResetPasswordDto; resetToken: string }
	>({
		callback: resetPassword,
		successMessage: 'The password has been changed successfully',
	})

	const onSubmit: SubmitHandler<ReccoverPasswordFields> = async (data) => {
		const dto: ResetPasswordDto = { password: data.password }
		submitResetPassword({
			dto,
			resetToken: resetToken ?? '',
		})
	}

	return (
		<Wrapper>
			<Title fontSize={28} textAlign={'center'} color={'black'}>
				Create a New Password
			</Title>
			<Paragraph color="black" margin="15px 0">
				Enter a new password for your account and store it in a safe place. The
				password must be at least 6 characters long. Use a combination of
				letters, numbers, and special characters for better security. Once
				saved, use this password to log in to your account.
			</Paragraph>
			<motion.form onSubmit={handleSubmit(onSubmit)} {...fadeSlide()}>
				<PasswordInput<ReccoverPasswordFields>
					control={control}
					label="Password"
					name="password"
					width="100%"
					margin="0 0 15px 0"
					rules={{ required: true, minLength: 6, maxLength: 12 }}
					isShowCharCounter={true}
					defaultValue=""
				/>
				<PasswordInput<ReccoverPasswordFields>
					control={control}
					label="Password again"
					name="passwordAgain"
					width="100%"
					margin="0 0 15px 0"
					rules={{ required: true, minLength: 6, maxLength: 12 }}
					isShowCharCounter={true}
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
			</motion.form>
		</Wrapper>
	)
}

export default RecoverPassword
