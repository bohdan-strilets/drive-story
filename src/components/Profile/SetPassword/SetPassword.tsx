import { FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import Button from '@/components/UI/Button'
import Loader from '@/components/UI/Loader'
import PasswordInput from '@/components/UI/PasswordInput/PasswordInput'

import useSubmit from '@/hooks/ui/useSubmit'
import { useSetPassword } from '@/hooks/user/useSetPassword'

import { SetPasswordDto } from '@/types/dto/SetPasswordDto'
import { User } from '@/types/types/User'

import { userRules } from '@/validation/rules/userRules'
import { Fields, Validation } from '@/validation/schemas/SetPasswordSchema'

const SetPassword: FC = () => {
	const { mutateAsync: setPassword, isPending } = useSetPassword()
	const { control, handleSubmit } = useForm<Fields>(Validation)

	const submitEditPassword = useSubmit<User | null, SetPasswordDto>({
		callback: setPassword,
		successMessage: 'The password was successfully created',
		isCloseModal: true,
	})

	const onSubmit: SubmitHandler<Fields> = async (data) => {
		const dto: SetPasswordDto = { password: data.password }
		submitEditPassword(dto)
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<PasswordInput
				control={control}
				label="Create a new password"
				name="password"
				width="100%"
				margin="0 0 15px 0"
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
				{isPending ? '...' : 'set'}
			</Button>
		</form>
	)
}

export default SetPassword
