import { FC, useEffect } from 'react'
import { useFormContext } from 'react-hook-form'

import DatePicker from '@/components/UI/DatePicker'
import TextInput from '@/components/UI/TextInput'
import Title from '@/components/UI/Title'

import { carRules } from '@/validation/rules/carRules'
import { Fields } from '@/validation/schemas/CarSchema'

const RegistrationFields: FC = () => {
	const { control, watch, setValue } = useFormContext<Fields>()
	const yearIssue = watch('basicInfo.year')

	useEffect(() => {
		if (yearIssue) {
			setValue('registration.firstRegDate', new Date(`${yearIssue}-01-01`), {
				shouldValidate: true,
				shouldDirty: true,
			})
		}
	}, [yearIssue, setValue])

	return (
		<>
			<Title fontSize={24} textAlign="left" color="black">
				Car Registration Details
			</Title>
			<TextInput
				control={control}
				label="VIN (Vehicle Identification Number)"
				name="registration.vin"
				type="text"
				width="100%"
				margin="0 0 15px 0"
				rules={{
					minLength: carRules.registration.vin.min,
					maxLength: carRules.registration.vin.max,
				}}
				isShowCharCounter={true}
			/>
			<TextInput
				control={control}
				label="License plate number"
				name="registration.regNumber"
				type="text"
				width="100%"
				margin="0 0 15px 0"
				rules={{
					minLength: carRules.registration.regNumber.min,
					maxLength: carRules.registration.regNumber.max,
				}}
				isShowCharCounter={true}
			/>
			<DatePicker
				control={control}
				label="First registration date"
				name="registration.firstRegDate"
				placeholder="Select date"
				width="100%"
				margin="0 0 15px 0"
				rules={{
					minDate: new Date(`${yearIssue}-01-01`),
					maxDate: carRules.registration.firstRegDate.max,
				}}
			/>
		</>
	)
}

export default RegistrationFields
