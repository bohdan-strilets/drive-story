import { FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import Button from '@/components/UI/Button'
import ButtonGoBack from '@/components/UI/ButtonGoBack'
import Loader from '@/components/UI/Loader'
import Paragraph from '@/components/UI/Paragraph'
import TextInput from '@/components/UI/TextInput'

import useSubmit from '@/hooks/ui/useSubmit'
import { useResendActivationEmail } from '@/hooks/user/useResendActivationEmail'

import { EmailDto } from '@/types/dto/EmailDto'
import { ResendEmailProps } from '@/types/props/Auth/ResendEmailProps'
import { User } from '@/types/types/User'

import { Fields, Validation } from '@/validation/schemas/EmailSchema'

const ResendEmail: FC<ResendEmailProps> = ({ showButtonGoBack = false }) => {
	const navigate = useNavigate()
	const { mutateAsync: resendActivationEmail, isPending } =
		useResendActivationEmail()

	const { control, handleSubmit } = useForm<Fields>(Validation)

	const submitResendActivationEmail = useSubmit<User | null, EmailDto>({
		callback: resendActivationEmail,
		successMessage: 'The letter has been sent successfully',
	})

	const onSubmit: SubmitHandler<Fields> = async (data) => {
		submitResendActivationEmail(data)
	}

	return (
		<>
			{showButtonGoBack && (
				<ButtonGoBack
					label="welcome message"
					onClick={() => navigate(-1)}
					margin="0 0 15px 0"
				/>
			)}
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
				<TextInput
					control={control}
					label="Email"
					name="email"
					type="email"
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
			</form>
		</>
	)
}

export default ResendEmail
