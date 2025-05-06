import { FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useParams } from 'react-router-dom'

import Button from '@/components/UI/Button'
import DatePicker from '@/components/UI/DatePicker'
import DropdownList from '@/components/UI/DropdownList'
import Loader from '@/components/UI/Loader'
import NumberInput from '@/components/UI/NumberInput'
import RangeInput from '@/components/UI/RangeInput'
import Switch from '@/components/UI/Switch'
import TextInput from '@/components/UI/TextInput'
import Title from '@/components/UI/Title'

import { useCreateInsurance } from '@/hooks/insurance/useCreateInsurance'
import useSubmit from '@/hooks/ui/useSubmit'

import {
	formatValue,
	generateDropdownOptions,
} from '@/utils/generateDropdownOptions'

import { InsuranceDto } from '@/types/dto/InsuranceDto'
import { InsuranceType } from '@/types/enums/InsuranceType'
import { AddInsuranceParams } from '@/types/params/AddInsuranceParams'
import { InsurancePolicy } from '@/types/types/InsurancePolicy'

import {
	InsurancePolicyFields,
	InsurancePolicyValidation,
} from '@/validation/InsurancePolicySchema'

const AddInsurancePolicy: FC = () => {
	const { carId } = useParams()
	const { mutateAsync: createInsurance, isPending } = useCreateInsurance()

	const { control, handleSubmit } = useForm<InsurancePolicyFields>(
		InsurancePolicyValidation
	)

	const submitCreateInsurance = useSubmit<
		InsurancePolicy | null,
		AddInsuranceParams
	>({
		callback: createInsurance,
		successMessage: 'The insurance has been successfully created',
		isCloseModal: true,
	})

	const onSubmit: SubmitHandler<InsurancePolicyFields> = async (data) => {
		const payload: InsuranceDto = {
			insurerName: data.insurerName,
			policyNumber: data.policyNumber,
			insuranceType: data.insuranceType,
			startDate: data.startDate,
			endDate: data.endDate,
			coverageAmount: data.coverageAmount,
			paymentStatus: {
				isPaid: data.paymentStatus?.isPaid ?? false,
				installmentsCount: data.paymentStatus?.installmentsCount,
				installmentCost: data.paymentStatus?.installmentCost,
				totalInstallmentsSum: data.paymentStatus?.totalInstallmentsSum,
			},
		}

		submitCreateInsurance({ payload, carId: carId ?? '' })
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
				defaultValue={0}
			/>
			<>
				<Title fontSize={24} textAlign="left" color="black">
					Payment
				</Title>
				<Switch<InsurancePolicyFields>
					control={control}
					label="Was the insurance policy paid in full or was it split into parts?"
					name="paymentStatus.isPaid"
					margin="0 0 15px 0"
					rules={{ required: true }}
					defaultValue={false}
				/>
				<RangeInput<InsurancePolicyFields>
					control={control}
					label="Number of rats"
					name="paymentStatus.installmentsCount"
					width="100%"
					margin="0 0 15px 0"
					min={1}
					max={12}
					defaultValue={1}
				/>
				<NumberInput<InsurancePolicyFields>
					control={control}
					label="Cost of the rata"
					name="paymentStatus.installmentCost"
					width="100%"
					margin="0 0 15px 0"
					placeholder="0"
					defaultValue={0}
				/>
				<NumberInput<InsurancePolicyFields>
					control={control}
					label="Total cost for payment of all rats"
					name="paymentStatus.totalInstallmentsSum"
					width="100%"
					margin="0 0 15px 0"
					placeholder="0"
					defaultValue={0}
				/>
			</>

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
				{isPending ? '...' : 'create'}
			</Button>
		</form>
	)
}

export default AddInsurancePolicy
