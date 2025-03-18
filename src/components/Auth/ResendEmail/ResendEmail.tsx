import { FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import Button from '@/components/UI/Button'
import ButtonGoBack from '@/components/UI/ButtonGoBack'
import Paragraph from '@/components/UI/Paragraph'
import TextInput from '@/components/UI/TextInput'

import {
	ResendEmailFields,
	ResendEmailValidation,
} from '@/validation/ResendEmailSchema'

const ResendEmail: FC = () => {
	const navigate = useNavigate()
	const { control, handleSubmit } = useForm<ResendEmailFields>(
		ResendEmailValidation
	)

	const onSubmit: SubmitHandler<ResendEmailFields> = async (data) => {
		try {
			console.log(data)
			console.log('Email sand successfully.')
		} catch (error) {
			console.log(error)
		}
	}

	return (
		<>
			<ButtonGoBack
				label="welcome message"
				onClick={() => navigate(-1)}
				margin="0 0 15px 0"
			/>
			<Paragraph color="black" margin="0 0 10px 0">
				It looks like you haven’t activated your account yet. No worries—just
				enter your email address below, and we’ll send you a new activation
				link.
			</Paragraph>
			<Paragraph color="black" margin="0 0 10px 0">
				Please check your spam or junk folder if you don’t see the email in your
				inbox.
			</Paragraph>
			<Paragraph color="black" margin="0 0 10px 0">
				If you still don’t receive the email, please contact our support team
				for further assistance.
			</Paragraph>
			<form onSubmit={handleSubmit(onSubmit)}>
				<TextInput<ResendEmailFields>
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
				<Button
					background="yellow"
					color="black"
					hoverBackground="gray"
					hoverColor="white"
					width="100%"
					type="submit"
				>
					send
				</Button>
			</form>
		</>
	)
}

export default ResendEmail
