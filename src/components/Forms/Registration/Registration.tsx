import { motion } from 'motion/react'
import { FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import Button from '@/components/UI/Button'
import Checkbox from '@/components/UI/Checkbox'
import PasswordInput from '@/components/UI/PasswordInput/PasswordInput'
import StyledLink from '@/components/UI/StyledLink'
import TextInput from '@/components/UI/TextInput'
import Title from '@/components/UI/Title'

import useResponsive from '@/hooks/useResponsive'

import { routes } from '@/config/routes'

import {
	RegistrationFields,
	RegistrationValidation,
} from '@/validation/RegistrationSchema'

import { slideDownFadeIn } from '@/animations/slideDownFadeIn'

import { Group } from './Registration.styled'

const Registration: FC = () => {
	const { maxMobile } = useResponsive()
	const { control, handleSubmit } = useForm<RegistrationFields>(
		RegistrationValidation
	)

	const onSubmit: SubmitHandler<RegistrationFields> = async (data) => {
		try {
			console.log(data)
			console.log('Registration form successfully sending')
		} catch (error) {
			console.log(error)
		}
	}

	return (
		<motion.form onSubmit={handleSubmit(onSubmit)} {...slideDownFadeIn()}>
			<Title type="h2" fontSize={30} textAlign="left" variant="gray">
				Registration
			</Title>
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
					<StyledLink path={routes.PRIVACY_POLICY} label="Privacy policy" /> and{' '}
					agree to the{' '}
					<StyledLink path={routes.TERMS_USE} label="Terms of use" />
				</p>
			</Checkbox>
			<Button variant="yellow" width="100%" type="submit">
				subscribe
			</Button>
		</motion.form>
	)
}

export default Registration
