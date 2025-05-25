import { FC } from 'react'
import { useFormContext } from 'react-hook-form'

import DatePicker from '@/components/UI/DatePicker'
import DropdownList from '@/components/UI/DropdownList'
import TextInput from '@/components/UI/TextInput'
import Title from '@/components/UI/Title'

import { generateDropdownOptions } from '@/utils/generateDropdownOptions'

import { Gender } from '@/types/enums/Gender'

import { userRules } from '@/validation/rules/userRules'
import { Fields } from '@/validation/schemas/ProfileShema'

const UserInfoFields: FC = () => {
	const { control } = useFormContext<Fields>()

	const genders = Object.values(Gender)
	const genderOptions = generateDropdownOptions(genders)

	return (
		<>
			<Title fontSize={24} textAlign="left" color="black">
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
		</>
	)
}

export default UserInfoFields
