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

import { userRules } from '@/validation/rules/userRules'
import { Fields, Validation } from '@/validation/schemas/ProfileShema'

const EditProfile: FC = () => {
	const { mutateAsync: editProfile, isPending } = useEditProfile()
	const user = useUserStore((state) => state.user)
	const isLoading = useUserStore((state) => state.isLoading)

	const { control, handleSubmit } = useForm<Fields>(Validation)

	const submitEditProfile = useSubmit<User | null, ProfileDto>({
		callback: editProfile,
		successMessage: 'Profile successfully changed',
		isCloseModal: true,
	})

	const onSubmit: SubmitHandler<Fields> = async (data) => {
		const dto: ProfileDto = {
			firstName: data.firstName,
			lastName: data.lastName,
			nickname: data.nickname,
			birthDate: data.birthDate,
			gender: data.gender as Gender,
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

	if (isLoading) {
		return <Loader color={'gray'} />
	}

	return (
		user && (
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
					placeholder={userRules.firstName.placeholder}
					defaultValue={user.firstName}
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
					placeholder={userRules.lastName.placeholder}
					defaultValue={user?.lastName || ''}
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
					placeholder={userRules.nickname.placeholder}
					defaultValue={user?.nickname || ''}
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
					defaultValue={user.birthDate || new Date()}
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
					placeholder={userRules.phoneNumber.placeholder}
					defaultValue={formatPhoneNumber(user?.phoneNumber || '')}
					mask="000 000 000"
					unmask={true}
				/>
				<DropdownList
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
				<TextInput
					control={control}
					label="Country"
					name="location.country"
					type="text"
					width="100%"
					margin="0 0 15px 0"
					placeholder={userRules.location.country.placeholder}
					defaultValue={user?.location?.country || ''}
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
					placeholder={userRules.location.city.placeholder}
					defaultValue={user?.location?.city || ''}
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
					placeholder={userRules.location.postalCode.placeholder}
					defaultValue={formatPhoneNumber(user?.location?.postalCode || '')}
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
	)
}

export default EditProfile
