import { motion } from 'motion/react'
import { FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

import Button from '@/components/UI/Button'
import Checkbox from '@/components/UI/Checkbox'
import Loader from '@/components/UI/Loader'
import PasswordInput from '@/components/UI/PasswordInput/PasswordInput'
import StyledLink from '@/components/UI/StyledLink'
import TextInput from '@/components/UI/TextInput'

import { useRegistration } from '@/hooks/auth/useRegistration'
import useModal from '@/hooks/ui/useModal'
import useResponsive from '@/hooks/ui/useResponsive'

import { routes } from '@/config/routes'

import { handleError } from '@/utils/handleError'

import {
	RegistrationFields,
	RegistrationValidation,
} from '@/validation/RegistrationSchema'

import { fadeSlide } from '@/animations/fadeSlide'

import { Group } from './Registration.styled'

const Registration: FC = () => {
	const { maxMobile } = useResponsive()
	const { mutateAsync: register, isPending } = useRegistration()
	const { modalNames } = useModal()
	const navigate = useNavigate()

	const { control, handleSubmit } = useForm<RegistrationFields>(
		RegistrationValidation
	)

	const onSubmit: SubmitHandler<RegistrationFields> = async (data) => {
		try {
			const dto = {
				firstName: data.firstName,
				lastName: data.lastName,
				email: data.email,
				password: data.password,
			}

			const response = await register(dto)

			if (!response.success) {
				toast.error(
					response.message || 'Something went wrong, please try again'
				)
				return
			}

			toast.success('Registration was successful')
			navigate(routes.HOME, { state: { openModal: modalNames.WELCOME } })
		} catch (error) {
			handleError(error)
		}
	}

	return (
		<motion.form onSubmit={handleSubmit(onSubmit)} {...fadeSlide()}>
			<Group>
				<TextInput<RegistrationFields>
					control={control}
					label="First name"
					name="firstName"
					type="text"
					width={maxMobile ? '100%' : '49%'}
					margin="0 0 15px 0"
					placeholder="Madison"
					rules={{ required: true }}
					defaultValue=""
				/>
				<TextInput<RegistrationFields>
					control={control}
					label="Last name"
					name="lastName"
					type="text"
					width={maxMobile ? '100%' : '49%'}
					margin="0 0 15px 0"
					placeholder="Carter"
					rules={{ required: true }}
					defaultValue=""
				/>
			</Group>
			<TextInput<RegistrationFields>
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
			<Group>
				<PasswordInput<RegistrationFields>
					control={control}
					label="Password"
					name="password"
					width={maxMobile ? '100%' : '49%'}
					margin="0 0 15px 0"
					rules={{ required: true }}
					defaultValue=""
				/>
				<PasswordInput<RegistrationFields>
					control={control}
					label="Password again"
					name="passwordAgain"
					width={maxMobile ? '100%' : '49%'}
					margin="0 0 15px 0"
					rules={{ required: true }}
					defaultValue=""
				/>
			</Group>
			<Checkbox<RegistrationFields>
				control={control}
				name="isAccessRight"
				margin="0 0 15px 0"
				rules={{ isChecked: false, required: true }}
			>
				<p>
					I have read the{' '}
					<StyledLink
						path={routes.PRIVACY_POLICY}
						label="Privacy policy"
						color="yellow"
						hoverColor="black"
					/>{' '}
					and agree to the{' '}
					<StyledLink
						path={routes.TERMS_USE}
						label="Terms of use"
						color="yellow"
						hoverColor="black"
					/>
				</p>
			</Checkbox>
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
				{isPending ? '...' : 'registration'}
			</Button>
		</motion.form>
	)
}

export default Registration
