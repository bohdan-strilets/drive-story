import { FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import toast from 'react-hot-toast'

import Button from '@/components/UI/Button'
import DatePicker from '@/components/UI/DatePicker'
import DropdownList from '@/components/UI/DropdownList'
import Loader from '@/components/UI/Loader'
import TextInput from '@/components/UI/TextInput'

import { useEditProfile } from '@/hooks/user/useEditProfile'

import { useUserStore } from '@/store/useUserStore'

import { formatPhoneNumber } from '@/utils/formatPhoneNumber'
import {
	formatValue,
	generateDropdownOptions,
} from '@/utils/generateDropdownOptions'
import { handleError } from '@/utils/handleError'

import { ProfileDto } from '@/types/dto/ProfileDto'
import { Gender } from '@/types/enums/Gender'

import {
	EditProfileFields,
	EditProfileValidation,
} from '@/validation/EditProfileSchema'

const EditProfile: FC = () => {
	const { mutateAsync: editProfile, isPending } = useEditProfile()
	const user = useUserStore((state) => state.user)

	const { control, handleSubmit } = useForm<EditProfileFields>(
		EditProfileValidation
	)

	const onSubmit: SubmitHandler<EditProfileFields> = async (data) => {
		try {
			const dto: ProfileDto = {
				firstName: data.firstName,
				lastName: data.lastName,
				nickname: data.nickname,
				birthDate: data.birthDate,
				gender: data.gender,
				phoneNumber: data.phoneNumber,
				location: {
					country: data.location?.country,
					city: data.location?.city,
					postalCode: data.location?.postalCode,
				},
			}

			const response = await editProfile(dto)

			if (!response.success) {
				toast.error(
					response.message || 'Something went wrong, please try again'
				)
				return
			}

			toast.success('Profile successfully changed')
		} catch (error) {
			handleError(error)
		}
	}

	const genders = Object.values(Gender)
	const genderDropdownOptions = generateDropdownOptions(genders)

	return user ? (
		<form onSubmit={handleSubmit(onSubmit)}>
			<TextInput<EditProfileFields>
				control={control}
				label="First name"
				name="firstName"
				type="text"
				width="100%"
				margin="0 0 15px 0"
				placeholder="Madison"
				defaultValue={user?.firstName || ''}
			/>
			<TextInput<EditProfileFields>
				control={control}
				label="Last name"
				name="lastName"
				type="text"
				width="100%"
				margin="0 0 15px 0"
				placeholder="Carter"
				defaultValue={user?.lastName || ''}
			/>
			<TextInput<EditProfileFields>
				control={control}
				label="Nickname"
				name="nickname"
				type="text"
				width="100%"
				margin="0 0 15px 0"
				placeholder="Goffra"
				defaultValue={user?.nickname || ''}
			/>
			<DatePicker<EditProfileFields>
				control={control}
				name="birthDate"
				label="Birthday"
				placeholder="Seletec birthday"
				width="100%"
				margin="0 0 15px 0"
				defaultValue={user.birthDate || new Date()}
			/>
			<TextInput<EditProfileFields>
				control={control}
				label="PhoneNumber"
				name="phoneNumber"
				type="tel"
				width="100%"
				margin="0 0 15px 0"
				placeholder="123 456 789"
				defaultValue={formatPhoneNumber(user?.phoneNumber || '')}
			/>
			<DropdownList<EditProfileFields>
				control={control}
				options={genderDropdownOptions}
				label="Gender"
				name="gender"
				width="100%"
				margin="0 0 15px 0"
				placeholder="Select your gender"
				defaultValue={formatValue(user.gender)}
			/>
			<TextInput<EditProfileFields>
				control={control}
				label="Country"
				name="location.country"
				type="text"
				width="100%"
				margin="0 0 15px 0"
				placeholder="Poland"
				defaultValue={user?.location?.country || ''}
			/>
			<TextInput<EditProfileFields>
				control={control}
				label="City"
				name="location.city"
				type="text"
				width="100%"
				margin="0 0 15px 0"
				placeholder="Warshaw"
				defaultValue={user?.location?.city || ''}
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
	) : (
		<Loader color={'gray'} />
	)
}

export default EditProfile
