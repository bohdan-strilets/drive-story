import { FC } from 'react'
import { useFormContext } from 'react-hook-form'

import DropdownList from '@/components/UI/DropdownList'
import TextInput from '@/components/UI/TextInput'
import Title from '@/components/UI/Title'

import { useFetchMakes } from '@/hooks/carQuery/useFetchMakes'
import { useFetchModelForMake } from '@/hooks/carQuery/useFetchModelForMake'
import { useFetchTrims } from '@/hooks/carQuery/useFetchTrims'

import { generateDropdownOptions } from '@/utils/generateDropdownOptions'
import { generateNumberArray } from '@/utils/generateNumberArray'

import { carRules } from '@/validation/rules/carRules'
import { Fields } from '@/validation/schemas/CarSchema'

const BasicInfoFields: FC = () => {
	const { control, watch } = useFormContext<Fields>()

	const currentYear = new Date().getFullYear()
	const yearProduction = generateNumberArray(currentYear - 40, currentYear + 1)
	const yearOptions = generateDropdownOptions(yearProduction)

	const { data: makes, isLoading: isFetchMakes } = useFetchMakes()

	const makesOptions = generateDropdownOptions(
		makes?.data?.map((item) => item.make_display) ?? [],
		makes?.data?.map((item) => item.make_id) ?? []
	)

	const { data: models, isLoading: isFetchModel } = useFetchModelForMake({
		make: watch('basicInfo.make'),
		year: watch('basicInfo.year'),
	})

	const modelOptions = generateDropdownOptions(
		models?.data?.map((item) => item.model_name) ?? []
	)

	const { data: trims, isLoading: isFetchTrims } = useFetchTrims({
		make: watch('basicInfo.make'),
		model: watch('basicInfo.model'),
		year: watch('basicInfo.year'),
	})

	const trimsOptions = generateDropdownOptions(
		trims?.data?.map((item) => item.model_trim) ?? []
	)

	return (
		<>
			<Title fontSize={24} textAlign="left" color="black">
				Car Basic Details
			</Title>
			<DropdownList
				control={control}
				options={makesOptions}
				label="Car Make"
				name="basicInfo.make"
				width="100%"
				margin="0 0 15px 0"
				placeholder="Make"
				rules={{ required: true }}
				isLoading={isFetchMakes}
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
			<DropdownList
				control={control}
				options={modelOptions}
				label="Car Model"
				name="basicInfo.model"
				width="100%"
				margin="0 0 15px 0"
				placeholder="Model"
				rules={{ required: true }}
				isLoading={isFetchModel}
			/>
			<DropdownList
				control={control}
				options={trimsOptions}
				label="Generation (Model Series)"
				name="basicInfo.generation"
				width="100%"
				margin="0 0 15px 0"
				placeholder="Generation"
				isLoading={isFetchTrims}
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
