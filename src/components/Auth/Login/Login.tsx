import { motion } from 'motion/react'
import { FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import Button from '@/components/UI/Button'
import ButtonAsLink from '@/components/UI/ButtonAsLink'
import Loader from '@/components/UI/Loader'
import PasswordInput from '@/components/UI/PasswordInput/PasswordInput'
import TextInput from '@/components/UI/TextInput'

import { useLogin } from '@/hooks/auth/useLogin'
import useModal from '@/hooks/ui/useModal'
import useSubmit from '@/hooks/ui/useSubmit'

import { routes } from '@/config/routes'

import { LoginDto } from '@/types/dto/LoginDto'
import { AuthResponse } from '@/types/types/AuthResponse'

import { LoginFields, LoginValidation } from '@/validation/LoginSchema'

import { fadeSlide } from '@/animations/fadeSlide'

const Login: FC = () => {
	const { modalNames, onOpen } = useModal()
	const { mutateAsync: login, isPending } = useLogin()

	const { control, handleSubmit } = useForm<LoginFields>(LoginValidation)

	const submitLogin = useSubmit<AuthResponse | null, LoginDto>({
		callback: login,
		navigateTo: routes.HOME,
	})

	const onSubmit: SubmitHandler<LoginFields> = async (data) => {
		submitLogin(data)
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
				rules={{ required: true, minLength: 6, maxLength: 12 }}
				isShowCharCounter={true}
				defaultValue=""
			/>
			<ButtonAsLink
				onClick={() => onOpen(modalNames.FORGOT_PASSWORD)}
				color="yellow"
				hoverColor="black"
				label="Forgot your password?"
				margin="0 0 15px 0"
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
				{isPending ? '...' : 'login'}
			</Button>
		</motion.form>
	)
}

export default Login
