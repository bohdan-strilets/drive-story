import { motion } from 'motion/react'
import { FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { useParams } from 'react-router-dom'

import Button from '@/components/UI/Button'
import Loader from '@/components/UI/Loader'
import Paragraph from '@/components/UI/Paragraph'
import PasswordInput from '@/components/UI/PasswordInput/PasswordInput'
import Title from '@/components/UI/Title'

import { useResetPassword } from '@/hooks/user/useResetPassword'

import { handleError } from '@/utils/handleError'

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

	const onSubmit: SubmitHandler<ReccoverPasswordFields> = async (data) => {
		try {
			const dto = { password: data.password }
			const response = await resetPassword({
				dto,
				resetToken: resetToken ?? '',
			})

			if (!response.success) {
				toast.error(
					response.message || 'Something went wrong, please try again'
				)
				return
			}

			toast.success('The password has been changed successfully')
		} catch (error) {
			handleError(error)
		}
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
					rules={{ required: true }}
					defaultValue=""
				/>
				<PasswordInput<ReccoverPasswordFields>
					control={control}
					label="Password again"
					name="passwordAgain"
					width="100%"
					margin="0 0 15px 0"
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
			</motion.form>
		</Wrapper>
	)
}

export default RecoverPassword
