import { FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import Button from '@/components/UI/Button'
import DatePicker from '@/components/UI/DatePicker'
import DropdownList from '@/components/UI/DropdownList'
import Loader from '@/components/UI/Loader'
import TextInput from '@/components/UI/TextInput'
import Title from '@/components/UI/Title'

import useSubmit from '@/hooks/ui/useSubmit'
import { useEditProfile } from '@/hooks/user/useEditProfile'

import { useUserStore } from '@/store/useUserStore'

import { formatPhoneNumber } from '@/utils/formatPhoneNumber'
import {
	formatValue,
	generateDropdownOptions,
} from '@/utils/generateDropdownOptions'

import { ProfileDto } from '@/types/dto/ProfileDto'
import { Gender } from '@/types/enums/Gender'
import { User } from '@/types/types/User'

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

	const submitEditProfile = useSubmit<User | null, ProfileDto>({
		callback: editProfile,
		successMessage: 'Profile successfully changed',
		isCloseModal: true,
	})

	const onSubmit: SubmitHandler<EditProfileFields> = async (data) => {
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
		submitEditProfile(dto)
	}

	const genders = Object.values(Gender)
	const genderDropdownOptions = generateDropdownOptions(genders)

	return user ? (
		<form onSubmit={handleSubmit(onSubmit)}>
			<Title
				fontSize={20}
				textAlign="left"
				color={'black'}
				type="h2"
				margin="0 0 15px 0"
			>
				User information
			</Title>
			<TextInput<EditProfileFields>
				control={control}
				label="First name"
				name="firstName"
				type="text"
				width="100%"
				margin="0 0 15px 0"
				placeholder="Madison"
				defaultValue={user?.firstName || ''}
				rules={{ minLength: 2, maxLength: 50 }}
				isShowCharCounter={true}
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
				rules={{ minLength: 2, maxLength: 50 }}
				isShowCharCounter={true}
			/>
			<TextInput<EditProfileFields>
				control={control}
				label="Nickname"
				name="nickname"
				type="text"
				width="100%"
				margin="0 0 15px 0"
				placeholder="Tabasco"
				defaultValue={user?.nickname || ''}
				rules={{ minLength: 2, maxLength: 50 }}
				isShowCharCounter={true}
			/>
			<DatePicker<EditProfileFields>
				control={control}
				name="birthDate"
				label="Birthday"
				placeholder="Select birthday"
				width="100%"
				margin="0 0 15px 0"
				defaultValue={user.birthDate || new Date()}
				rules={{ minDate: new Date('1950-01-01'), maxDate: new Date() }}
			/>
			<TextInput<EditProfileFields>
				control={control}
				label="Phone number"
				name="phoneNumber"
				type="tel"
				width="100%"
				margin="0 0 15px 0"
				placeholder="000 000 000"
				defaultValue={formatPhoneNumber(user?.phoneNumber || '')}
				mask="000 000 000"
				unmask={true}
				rules={{ maxLength: 11 }}
				isShowCharCounter={true}
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
			<Title
				fontSize={20}
				textAlign="left"
				color={'black'}
				type="h2"
				margin="0 0 15px 0"
			>
				Location information
			</Title>
			<TextInput<EditProfileFields>
				control={control}
				label="Country"
				name="location.country"
				type="text"
				width="100%"
				margin="0 0 15px 0"
				placeholder="Poland"
				defaultValue={user?.location?.country || ''}
				rules={{ minLength: 2, maxLength: 100 }}
				isShowCharCounter={true}
			/>
			<TextInput<EditProfileFields>
				control={control}
				label="City"
				name="location.city"
				type="text"
				width="100%"
				margin="0 0 15px 0"
				placeholder="Warsaw"
				defaultValue={user?.location?.city || ''}
				rules={{ minLength: 2, maxLength: 100 }}
				isShowCharCounter={true}
			/>
			<TextInput<EditProfileFields>
				control={control}
				label="Postal code"
				name="location.postalCode"
				type="text"
				width="100%"
				margin="0 0 15px 0"
				placeholder="00-000"
				defaultValue={formatPhoneNumber(user?.location?.postalCode || '')}
				mask="00-000"
				unmask={false}
				rules={{ maxLength: 6 }}
				isShowCharCounter={true}
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
