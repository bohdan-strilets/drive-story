import { FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import Button from '@/components/UI/Button'
import TextInput from '@/components/UI/TextInput'
import Title from '@/components/UI/Title'

import {
	SubscribeFields,
	SubscribeValidation,
} from '@/validation/SubscribeSchema'

import { Wrapper } from './Subscribe.styled'

const Subscribe: FC = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<SubscribeFields>(SubscribeValidation)

	const onSubmit: SubmitHandler<SubscribeFields> = async (data) => {
		try {
			console.log(data)
			console.log('Subscribe form successfully sending')
		} catch (error) {
			console.log(error)
		}
	}

	return (
		<Wrapper onSubmit={handleSubmit(onSubmit)}>
			<Title type="h2" fontSize={18} textAlign="left" variant={'yellow'}>
				Newsletter
			</Title>
			<TextInput<SubscribeFields>
				register={register}
				name="name"
				type="text"
				width="100%"
				margin="0 0 15px 0"
				placeholder="Name"
				errors={errors}
				rules={{ required: true }}
			/>
			<TextInput<SubscribeFields>
				register={register}
				name="email"
				type="email"
				width="100%"
				margin="0 0 15px 0"
				placeholder="Email"
				errors={errors}
				rules={{ required: true }}
			/>
			<Button variant="yellow" width="100%" type="submit">
				subscribe
			</Button>
		</Wrapper>
	)
}

export default Subscribe
