import { FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import Button from '@/components/UI/Button'
import DatePicker from '@/components/UI/DatePicker'
import DropdownList from '@/components/UI/DropdownList'
import Loader from '@/components/UI/Loader'
import NumberInput from '@/components/UI/NumberInput'
import TextInput from '@/components/UI/TextInput'

import {
	formatValue,
	generateDropdownOptions,
} from '@/utils/generateDropdownOptions'

import { InsuranceType } from '@/types/enums/InsuranceType'

import {
	InsurancePolicyFields,
	InsurancePolicyValidation,
} from '@/validation/InsurancePolicySchema'

const AddInsurancePolicy: FC = () => {
	const { control, handleSubmit } = useForm<InsurancePolicyFields>(
		InsurancePolicyValidation
	)

	const onSubmit: SubmitHandler<InsurancePolicyFields> = async (data) => {
		console.log(data)
	}

	const insuranceType = Object.values(InsuranceType)
	const insuranceTypeDropdownOptions = generateDropdownOptions(insuranceType)

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<TextInput<InsurancePolicyFields>
				control={control}
				label="Name of the insurance company"
				name="insurerName"
				type="text"
				width="100%"
				margin="0 0 15px 0"
				placeholder="Insurance name"
				rules={{ required: true }}
			/>
			<TextInput<InsurancePolicyFields>
				control={control}
				label="Insurance policy number"
				name="policyNumber"
				type="text"
				width="100%"
				margin="0 0 15px 0"
				placeholder="WAA12345"
				rules={{ required: true }}
			/>
			<DatePicker<InsurancePolicyFields>
				control={control}
				name="startDate"
				label="Commencement of the insurance policy"
				placeholder="Start"
				width="100%"
				margin="0 0 15px 0"
				defaultValue={new Date()}
				rules={{ required: true }}
			/>
			<DatePicker<InsurancePolicyFields>
				control={control}
				name="endDate"
				label="Expiry of insurance policy"
				placeholder="End"
				width="100%"
				margin="0 0 15px 0"
				defaultValue={new Date()}
				rules={{ required: true }}
			/>
			<DropdownList<InsurancePolicyFields>
				control={control}
				options={insuranceTypeDropdownOptions}
				label="Type of insurance policy"
				name="insuranceType"
				width="100%"
				margin="0 0 15px 0"
				placeholder="Select fuel type"
				rules={{ required: true }}
				defaultValue={formatValue(InsuranceType.OC)}
			/>
			<NumberInput<InsurancePolicyFields>
				control={control}
				label="Insurance policy coverage amount"
				name="coverageAmount"
				width="100%"
				margin="0 0 15px 0"
				placeholder="0"
				rules={{ required: true }}
			/>

			{1 > 2 && <Loader color="gray" margin="15px 0" />}
			<Button
				background="yellow"
				color="black"
				hoverBackground="gray"
				hoverColor="white"
				width="100%"
				type="submit"
				disabled={1 > 2}
			>
				{1 > 2 ? '...' : 'create'}
			</Button>
		</form>
	)
}

export default AddInsurancePolicy
