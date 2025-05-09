import { FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import Button from '@/components/UI/Button'
import Loader from '@/components/UI/Loader'
import PasswordInput from '@/components/UI/PasswordInput/PasswordInput'

import useSubmit from '@/hooks/ui/useSubmit'
import { useEditPassword } from '@/hooks/user/useEditPassword'

import { EditPasswordDto } from '@/types/dto/EditPasswordDto'
import { User } from '@/types/types/User'

import { userRules } from '@/validation/rules/userRules'
import { Fields, Validation } from '@/validation/schemas/EditPasswordSchema'

const EditPassword: FC = () => {
	const { mutateAsync: editPassword, isPending } = useEditPassword()
	const { control, handleSubmit } = useForm<Fields>(Validation)

	const submitEditPassword = useSubmit<User | null, EditPasswordDto>({
		callback: editPassword,
		successMessage: 'The password has been successfully changed',
		isCloseModal: true,
	})

	const onSubmit: SubmitHandler<Fields> = async (data) => {
		const dto: EditPasswordDto = {
			password: data.password,
			newPassword: data.newPassword,
		}
		submitEditPassword(dto)
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<PasswordInput
				control={control}
				label="Enter your current password"
				name="password"
				width="100%"
				margin="0 0 15px 0"
				placeholder={userRules.password.placeholder}
				rules={{
					required: true,
					minLength: userRules.password.min,
					maxLength: userRules.password.max,
				}}
				isShowCharCounter={true}
				defaultValue=""
			/>
			<PasswordInput
				control={control}
				label="Create a new password"
				name="newPassword"
				width="100%"
				margin="0 0 15px 0"
				placeholder={userRules.password.placeholder}
				rules={{
					required: true,
					minLength: userRules.password.min,
					maxLength: userRules.password.max,
				}}
				isShowCharCounter={true}
				defaultValue=""
			/>
			<PasswordInput
				control={control}
				label="Repeat the entered password again"
				name="passwordAgain"
				width="100%"
				margin="0 0 15px 0"
				placeholder={userRules.password.placeholder}
				rules={{
					required: true,
					minLength: userRules.password.min,
					maxLength: userRules.password.max,
				}}
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
