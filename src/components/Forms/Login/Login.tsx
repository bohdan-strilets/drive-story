import { motion } from 'motion/react'
import { FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import Button from '@/components/UI/Button'
import ButtonAsLink from '@/components/UI/ButtonAsLink'
import PasswordInput from '@/components/UI/PasswordInput/PasswordInput'
import TextInput from '@/components/UI/TextInput'

import useModal from '@/hooks/useModal'

import { LoginFields, LoginValidation } from '@/validation/LoginSchema'

import { fadeSlide } from '@/animations/fadeSlide'

const Login: FC = () => {
	const { control, handleSubmit } = useForm<LoginFields>(LoginValidation)
	const { modalNames, onOpen } = useModal()

	const onSubmit: SubmitHandler<LoginFields> = async (data) => {
		try {
			console.log(data)
			console.log('Login form successfully sending')
		} catch (error) {
			console.log(error)
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
			>
				login
			</Button>
		</motion.form>
	)
}

export default Login
