import { FC } from 'react'
import { useFormContext } from 'react-hook-form'

import Checkbox from '@/components/UI/Checkbox'
import DatePicker from '@/components/UI/DatePicker'
import NumberInput from '@/components/UI/NumberInput'
import Textarea from '@/components/UI/Textarea'
import Title from '@/components/UI/Title'

import { carRules } from '@/validation/rules/carRules'
import { Fields } from '@/validation/schemas/CarSchema'

const OwnershipAndDescFields: FC = () => {
	const { control, watch } = useFormContext<Fields>()

	const yearIssue = watch('basicInfo.year')
	const isSold = watch('ownership.isSold')

	return (
		<>
			<Title fontSize={24} textAlign="left" color="black">
				Ownership & Description
			</Title>
			<DatePicker
				control={control}
				name="ownership.purchaseDate"
				label="Purchase Date"
				placeholder="Select date"
				width="100%"
				margin="0 0 15px 0"
				rules={{
					minDate: new Date(`${yearIssue}-01-01`),
					maxDate: carRules.ownership.purchaseDate.max,
				}}
			/>
			<NumberInput
				control={control}
				label="Purchase price (PLN)"
				name="ownership.purchasePrice"
				width="100%"
				margin="0 0 15px 0"
				rules={{
					min: carRules.ownership.purchasePrice.min,
					max: carRules.ownership.purchasePrice.max,
				}}
				defaultValue={0}
			/>

			<Checkbox
				control={control}
				name="ownership.isSold"
				margin="0 0 15px 0"
				rules={{ isChecked: false, required: false }}
			>
				<p>Car is sold?</p>
			</Checkbox>

			{isSold && (
				<>
					<DatePicker
						control={control}
						name="ownership.saleDate"
						label="Sale Date"
						placeholder="Select date"
						width="100%"
						margin="0 0 15px 0"
						rules={{
							minDate: new Date(`${yearIssue}-01-01`),
							maxDate: carRules.ownership.saleDate.max,
						}}
					/>
					<NumberInput
						control={control}
						label="Sale price (PLN)"
						name="ownership.salePrice"
						width="100%"
						margin="0 0 15px 0"
						rules={{
							min: carRules.ownership.salePrice.min,
							max: carRules.ownership.salePrice.max,
						}}
						defaultValue={0}
					/>
				</>
			)}

			<Textarea
				control={control}
				name="description"
				label="A few words about the car"
				width="100%"
				margin="0 0 15px 0"
				rules={{
					minLength: carRules.description.min,
					maxLength: carRules.description.max,
				}}
				isShowCharCounter={true}
			/>
		</>
	)
}

export default OwnershipAndDescFields
