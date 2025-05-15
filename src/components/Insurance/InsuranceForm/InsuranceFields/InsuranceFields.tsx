import { FC } from 'react'
import { useFormContext } from 'react-hook-form'

import DatePicker from '@/components/UI/DatePicker'
import DropdownList from '@/components/UI/DropdownList'
import NumberInput from '@/components/UI/NumberInput'
import TextInput from '@/components/UI/TextInput'

import {
	formatValue,
	generateDropdownOptions,
} from '@/utils/generateDropdownOptions'

import { InsuranceType } from '@/types/enums/InsuranceType'

import { insuranceRules } from '@/validation/rules/insuranceRules'
import { Fields } from '@/validation/schemas/InsuranceSchema'

const InsuranceFields: FC = () => {
	const { control } = useFormContext<Fields>()

	const insuranceType = Object.values(InsuranceType)
	const insuranceTypeDropdownOptions = generateDropdownOptions(insuranceType)

	return (
		<>
			<TextInput
				control={control}
				label="Name of the insurance company"
				name="insurerName"
				type="text"
				width="100%"
				margin="0 0 15px 0"
				placeholder={insuranceRules.insurerName.placeholder}
				rules={{
					required: true,
					minLength: insuranceRules.insurerName.min,
					maxLength: insuranceRules.insurerName.max,
				}}
				isShowCharCounter={true}
			/>
			<TextInput
				control={control}
				label="Insurance policy number"
				name="policyNumber"
				type="text"
				width="100%"
				margin="0 0 15px 0"
				placeholder={insuranceRules.policyNumber.placeholder}
				rules={{
					required: true,
					minLength: insuranceRules.policyNumber.min,
					maxLength: insuranceRules.policyNumber.max,
				}}
				isShowCharCounter={true}
			/>
			<DatePicker
				control={control}
				name="startDate"
				label="Commencement of the insurance policy"
				placeholder="Start"
				width="100%"
				margin="0 0 15px 0"
				defaultValue={new Date()}
				rules={{
					required: true,
					minDate: insuranceRules.startDate.min,
					maxDate: insuranceRules.startDate.max,
				}}
			/>
			<DatePicker
				control={control}
				name="endDate"
				label="Expiry of insurance policy"
				placeholder="End"
				width="100%"
				margin="0 0 15px 0"
				defaultValue={new Date()}
				rules={{
					required: true,
					minDate: insuranceRules.endDate.min,
					maxDate: insuranceRules.endDate.max,
				}}
			/>
			<DropdownList
				control={control}
				options={insuranceTypeDropdownOptions}
				label="Type of insurance policy"
				name="insuranceType"
				width="100%"
				margin="0 0 15px 0"
				placeholder="Select fuel type"
				rules={{ required: true }}
				defaultValue={formatValue<InsuranceType>(InsuranceType.OC)}
			/>
			<NumberInput
				control={control}
				label="Insurance policy coverage amount"
				name="coverageAmount"
				width="100%"
				margin="0 0 15px 0"
				placeholder={insuranceRules.coverageAmount.placeholder}
				rules={{
					required: true,
					min: insuranceRules.coverageAmount.min,
					max: insuranceRules.coverageAmount.max,
				}}
				defaultValue={0}
			/>
		</>
	)
}

export default InsuranceFields
