import { FC } from 'react'
import { useFormContext } from 'react-hook-form'

import DropdownList from '@/components/UI/DropdownList'
import TextInput from '@/components/UI/TextInput'
import Title from '@/components/UI/Title'

import { generateDropdownOptions } from '@/utils/generateDropdownOptions'
import { generateNumberArray } from '@/utils/generateNumberArray'

import { carRules } from '@/validation/rules/carRules'
import { Fields } from '@/validation/schemas/CarSchema'

const BasicInfoFields: FC = () => {
	const { control } = useFormContext<Fields>()

	const currentYear = new Date().getFullYear()
	const yearProduction = generateNumberArray(currentYear - 40, currentYear + 1)
	const yearOptions = generateDropdownOptions(yearProduction)

	return (
		<>
			<Title fontSize={24} textAlign="left" color="black">
				Car Basic Details
			</Title>
			<TextInput
				control={control}
				label="Car Make"
				name="basicInfo.make"
				type="text"
				width="100%"
				margin="0 0 15px 0"
				rules={{
					required: true,
					minLength: carRules.basicInfo.make.min,
					maxLength: carRules.basicInfo.make.max,
				}}
				isShowCharCounter={true}
			/>
			<TextInput
				control={control}
				label="Car Model"
				name="basicInfo.model"
				type="text"
				width="100%"
				margin="0 0 15px 0"
				rules={{
					required: true,
					minLength: carRules.basicInfo.model.min,
					maxLength: carRules.basicInfo.model.max,
				}}
				isShowCharCounter={true}
			/>
			<DropdownList
				control={control}
				options={yearOptions}
				label="Year of Manufacture"
				name="basicInfo.year"
				width="100%"
				margin="0 0 15px 0"
				placeholder="Year"
				rules={{ required: true }}
			/>
			<TextInput
				control={control}
				label="Generation (Model Series)"
				name="basicInfo.generation"
				type="text"
				width="100%"
				margin="0 0 15px 0"
				rules={{
					minLength: carRules.basicInfo.generation.min,
					maxLength: carRules.basicInfo.generation.max,
				}}
				isShowCharCounter={true}
			/>
			<TextInput
				control={control}
				label="Short name"
				name="basicInfo.shortName"
				type="text"
				width="100%"
				margin="0 0 15px 0"
				rules={{
					minLength: carRules.basicInfo.shortName.min,
					maxLength: carRules.basicInfo.shortName.max,
				}}
				isShowCharCounter={true}
			/>
		</>
	)
}

export default BasicInfoFields
