import { FC, useEffect } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import Button from '@/components/UI/Button'
import DatePicker from '@/components/UI/DatePicker'
import DropdownList from '@/components/UI/DropdownList'
import Loader from '@/components/UI/Loader'
import TextInput from '@/components/UI/TextInput'
import Title from '@/components/UI/Title'

import useSubmit from '@/hooks/ui/useSubmit'
import { useEditProfile } from '@/hooks/user/useEditProfile'

import { generateDropdownOptions } from '@/utils/generateDropdownOptions'

import { ProfileDto } from '@/types/dto/ProfileDto'
import { Gender } from '@/types/enums/Gender'
import { EditProfileProps } from '@/types/props/Profile/EditProfileProps'
import { User } from '@/types/types/User'

import { userRules } from '@/validation/rules/userRules'
import { Fields, Schema, Validation } from '@/validation/schemas/ProfileShema'

const EditProfile: FC<EditProfileProps> = ({ user }) => {
	const { mutateAsync: editProfile, isPending } = useEditProfile()

	const { control, handleSubmit, reset } = useForm<Fields>(Validation)

	useEffect(() => {
		if (user) {
			const params = { stripUnknown: true }
			const initialValues = Schema.cast(user, params) as Fields
			reset(initialValues)
		}
	}, [reset, user])

	const submitEditProfile = useSubmit<User | null, ProfileDto>({
		callback: editProfile,
		successMessage: 'Profile successfully changed',
		isCloseModal: true,
	})

	const onSubmit: SubmitHandler<Fields> = async (data) => {
		const payload: ProfileDto = data
		submitEditProfile(payload)
	}

	const genders = Object.values(Gender)
	const genderOptions = generateDropdownOptions(genders)

	return (
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
			<TextInput
				control={control}
				label="First name"
				name="firstName"
				type="text"
				width="100%"
				margin="0 0 15px 0"
				rules={{
					minLength: userRules.firstName.min,
					maxLength: userRules.firstName.max,
				}}
				isShowCharCounter={true}
			/>
			<TextInput
				control={control}
				label="Last name"
				name="lastName"
				type="text"
				width="100%"
				margin="0 0 15px 0"
				rules={{
					minLength: userRules.lastName.min,
					maxLength: userRules.lastName.max,
				}}
				isShowCharCounter={true}
			/>
			<TextInput
				control={control}
				label="Nickname"
				name="nickname"
				type="text"
				width="100%"
				margin="0 0 15px 0"
				rules={{
					minLength: userRules.nickname.min,
					maxLength: userRules.nickname.max,
				}}
				isShowCharCounter={true}
			/>
			<DatePicker
				control={control}
				name="birthDate"
				label="Birthday"
				placeholder="Select birthday"
				width="100%"
				margin="0 0 15px 0"
				rules={{
					minDate: userRules.birthDate.min,
					maxDate: userRules.birthDate.max,
				}}
			/>
			<TextInput
				control={control}
				label="Phone number"
				name="phoneNumber"
				type="tel"
				width="100%"
				margin="0 0 15px 0"
				mask="000 000 000"
				unmask={true}
			/>
			<DropdownList
				control={control}
				options={genderOptions}
				label="Gender"
				name="gender"
				width="100%"
				margin="0 0 15px 0"
				placeholder="Select your gender"
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
			<TextInput
				control={control}
				label="Country"
				name="location.country"
				type="text"
				width="100%"
				margin="0 0 15px 0"
				rules={{
					minLength: userRules.location.country.min,
					maxLength: userRules.location.country.max,
				}}
				isShowCharCounter={true}
			/>
			<TextInput
				control={control}
				label="City"
				name="location.city"
				type="text"
				width="100%"
				margin="0 0 15px 0"
				rules={{
					minLength: userRules.location.city.min,
					maxLength: userRules.location.city.max,
				}}
				isShowCharCounter={true}
			/>
			<TextInput
				control={control}
				label="Postal code"
				name="location.postalCode"
				type="text"
				width="100%"
				margin="0 0 15px 0"
				mask="00-000"
				unmask={false}
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

export default EditProfile
