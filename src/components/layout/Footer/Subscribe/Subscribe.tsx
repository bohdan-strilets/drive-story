import { FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import Button from '@/components/UI/Button'
import TextInput from '@/components/UI/TextInput'
import Title from '@/components/UI/Title'

import { subscribeRules } from '@/validation/rules/subscribeRules'
import { userRules } from '@/validation/rules/userRules'
import { Fields, Validation } from '@/validation/schemas/SubscribeSchema'

import { fadeSlide } from '@/animations/fadeSlide'

import { Wrapper } from './Subscribe.styled'

const Subscribe: FC = () => {
	const { handleSubmit, control } = useForm<Fields>(Validation)

	const onSubmit: SubmitHandler<Fields> = async (data) => {
		try {
			console.log(data)
			console.log('Subscribe form successfully sending')
		} catch (error) {
			console.log(error)
		}
	}

	return (
		<Wrapper onSubmit={handleSubmit(onSubmit)} {...fadeSlide()}>
			<Title type="h2" fontSize={18} textAlign="left" color={'yellow'}>
				Newsletter
			</Title>
			<TextInput
				control={control}
				name="name"
				type="text"
				width="100%"
				margin="0 0 15px 0"
				placeholder={subscribeRules.name.placeholder}
				rules={{
					required: true,
					minLength: subscribeRules.name.min,
					max: subscribeRules.name.max,
				}}
				defaultValue=""
			/>
			<TextInput
				control={control}
				name="email"
				type="email"
				width="100%"
				margin="0 0 15px 0"
				placeholder={userRules.email.placeholder}
				rules={{ required: true }}
				defaultValue=""
			/>
			<Button
				background="yellow"
				color="black"
				hoverBackground="gray"
				hoverColor="white"
				width="100%"
				type="submit"
			>
				subscribe
			</Button>
		</Wrapper>
	)
}

export default Subscribe
