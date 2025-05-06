import { FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import Button from '@/components/UI/Button'
import Loader from '@/components/UI/Loader'
import PasswordInput from '@/components/UI/PasswordInput/PasswordInput'

import useSubmit from '@/hooks/ui/useSubmit'
import { useEditPassword } from '@/hooks/user/useEditPassword'

import { EditPasswordDto } from '@/types/dto/EditPasswordDto'
import { User } from '@/types/types/User'

import {
	EditPasswordFields,
	EditPasswordValidation,
} from '@/validation/EditPasswordSchema'

const EditPassword: FC = () => {
	const { mutateAsync: editPassword, isPending } = useEditPassword()

	const { control, handleSubmit } = useForm<EditPasswordFields>(
		EditPasswordValidation
	)

	const submitEditPassword = useSubmit<User | null, EditPasswordDto>({
		callback: editPassword,
		successMessage: 'The password has been successfully changed',
		isCloseModal: true,
	})

	const onSubmit: SubmitHandler<EditPasswordFields> = async (data) => {
		const dto: EditPasswordDto = {
			password: data.password,
			newPassword: data.newPassword,
		}
		submitEditPassword(dto)
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<PasswordInput<EditPasswordFields>
				control={control}
				label="Enter your current password"
				name="password"
				width="100%"
				margin="0 0 15px 0"
				rules={{ required: true, minLength: 6, maxLength: 12 }}
				isShowCharCounter={true}
				defaultValue=""
			/>
			<PasswordInput<EditPasswordFields>
				control={control}
				label="Create a new password"
				name="newPassword"
				width="100%"
				margin="0 0 15px 0"
				rules={{ required: true, minLength: 6, maxLength: 12 }}
				isShowCharCounter={true}
				defaultValue=""
			/>
			<PasswordInput<EditPasswordFields>
				control={control}
				label="Repeat the entered password again"
				name="passwordAgain"
				width="100%"
				margin="0 0 15px 0"
				rules={{ required: true, minLength: 6, maxLength: 12 }}
				isShowCharCounter={true}
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
				{isPending ? '...' : 'edit'}
			</Button>
		</form>
	)
}

export default EditPassword
