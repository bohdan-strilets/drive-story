import { FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import Button from '@/components/UI/Button'
import Loader from '@/components/UI/Loader'
import Paragraph from '@/components/UI/Paragraph'
import TextInput from '@/components/UI/TextInput'

import useSubmit from '@/hooks/ui/useSubmit'
import { useEditEmail } from '@/hooks/user/useEditEmail'

import { EmailDto } from '@/types/dto/EmailDto'
import { User } from '@/types/types/User'

import {
	EditEmailFields,
	EditEmailValidation,
} from '@/validation/EditEmailSchema'

const EditEmail: FC = () => {
	const { mutateAsync: editEmail, isPending } = useEditEmail()

	const { control, handleSubmit } =
		useForm<EditEmailFields>(EditEmailValidation)

	const submitEditEmail = useSubmit<User | null, EmailDto>({
		callback: editEmail,
		successMessage: 'The email has been successfully changed',
	})

	const onSubmit: SubmitHandler<EditEmailFields> = async (data) => {
		submitEditEmail(data)
	}

	return (
		<>
			<Paragraph color="black" margin="0 0 10px 0">
				Enter the new email address you want to use. After making the changes,
				the system will automatically send an activation email to the new
				address.
			</Paragraph>
			<Paragraph color="black" margin="0 0 10px 0">
				Please ensure the accuracy of the entered email address, as an email
				with activation instructions will be sent to it. If you don't receive
				the activation email within a few minutes, check your 'Spam' or 'Junk'
				folder in your email inbox. Please note that the new email address will
				not be activated until you confirm it by clicking the link in the
				activation email. If you encounter any difficulties or have questions,
				don't hesitate to contact our support team.
			</Paragraph>
			<form onSubmit={handleSubmit(onSubmit)}>
				<TextInput<EditEmailFields>
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
					{isPending ? '...' : 'Edit'}
				</Button>
			</form>
		</>
	)
}

export default EditEmail
