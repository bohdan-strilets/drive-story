import { motion } from 'motion/react'
import { FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

import Button from '@/components/UI/Button'
import ButtonAsLink from '@/components/UI/ButtonAsLink'
import PasswordInput from '@/components/UI/PasswordInput/PasswordInput'
import TextInput from '@/components/UI/TextInput'

import { useLogin } from '@/hooks/auth/useLogin'
import useModal from '@/hooks/ui/useModal'

import { routes } from '@/config/routes'

import { handleError } from '@/utils/handleError'

import { LoginFields, LoginValidation } from '@/validation/LoginSchema'

import { fadeSlide } from '@/animations/fadeSlide'

const Login: FC = () => {
	const { modalNames, onOpen } = useModal()
	const { mutateAsync: login, isPending } = useLogin()
	const navigate = useNavigate()

	const { control, handleSubmit } = useForm<LoginFields>(LoginValidation)

	const onSubmit: SubmitHandler<LoginFields> = async (data) => {
		try {
			const response = await login(data)

			if (!response.success) {
				toast.error(response.message || 'Error during login')
				return
			}

			navigate(routes.HOME)
		} catch (error) {
			handleError(error)
		}
	}

	return (
		<motion.form onSubmit={handleSubmit(onSubmit)} {...fadeSlide()}>
			<TextInput<LoginFields>
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
			<PasswordInput<LoginFields>
				control={control}
				label="Password"
				name="password"
				width="100%"
				margin="0 0 15px 0"
				rules={{ required: true }}
				defaultValue=""
			/>
			<ButtonAsLink
				onClick={() => onOpen(modalNames.FORGOT_PASSWORD)}
				color="yellow"
				hoverColor="black"
				label="Forgot your password?"
				margin="0 0 15px 0"
			/>
			<Button
				background="yellow"
				color="black"
				hoverBackground="gray"
				hoverColor="white"
				width="100%"
				type="submit"
				disabled={isPending}
			>
				{isPending ? '...' : 'login'}
			</Button>
		</motion.form>
	)
}

export default Login
