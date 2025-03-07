import { FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import Button from '@/components/UI/Button'
import Checkbox from '@/components/UI/Checkbox'
import StyledLink from '@/components/UI/StyledLink'
import TextInput from '@/components/UI/TextInput'
import Title from '@/components/UI/Title'

import { routes } from '@/config/routes'

import {
	RegistrationFields,
	RegistrationValidation,
} from '@/validation/RegistrationSchema'

import { Group } from './Registration.styled'

const Registration: FC = () => {
	const {
		control,
		register,
		handleSubmit,

		formState: { errors },
	} = useForm<RegistrationFields>(RegistrationValidation)

	const onSubmit: SubmitHandler<RegistrationFields> = async (data) => {
		try {
			console.log(data)
			console.log('Registration form successfully sending')
		} catch (error) {
			console.log(error)
		}
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<Title type="h2" fontSize={36} textAlign="left" variant="gray">
				Registration
			</Title>
			<Group>
				<TextInput<RegistrationFields>
					register={register}
					label="First name"
					name="firstName"
					type="text"
					width="49%"
					margin="0 0 15px 0"
					placeholder="Madison"
					errors={errors}
					rules={{ required: true }}
				/>
				<TextInput<RegistrationFields>
					register={register}
					label="Last name"
					name="lastName"
					type="text"
					width="49%"
					margin="0 0 15px 0"
					placeholder="Carter"
					errors={errors}
					rules={{ required: true }}
				/>
			</Group>
			<TextInput<RegistrationFields>
				register={register}
				label="Email"
				name="email"
				type="email"
				width="100%"
				margin="0 0 15px 0"
				placeholder="madison.carter@gmail.com"
				errors={errors}
				rules={{ required: true }}
			/>
			<Group>
				<TextInput<RegistrationFields>
					register={register}
					label="Password"
					name="password"
					type="password"
					width="49%"
					errors={errors}
					rules={{ required: true }}
				/>
				<TextInput<RegistrationFields>
					register={register}
					label="Password again"
					name="passwordAgain"
					type="password"
					width="49%"
					errors={errors}
					rules={{ required: true }}
				/>
			</Group>
			<Checkbox<RegistrationFields>
				control={control}
				name="isAccessRight"
				errors={errors}
				rules={{ isChecked: false, required: true }}
			>
				I have read the{' '}
				<StyledLink
					path={routes.PRIVACY_POLICY}
					label="Privacy policy"
					margin="0 8px"
				/>
				and agree to the{' '}
				<StyledLink
					path={routes.TERMS_USE}
					label="Terms of use"
					margin="0 8px"
				/>
			</Checkbox>
			<Button variant="yellow" width="100%" type="submit" margin=" 15px 0 0 0">
				subscribe
			</Button>
		</form>
	)
}

export default Registration
