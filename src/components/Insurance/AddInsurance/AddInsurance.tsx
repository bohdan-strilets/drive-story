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

import { insuranceRules } from '@/validation/rules/insuranceRules'
import { Fields, Validation } from '@/validation/schemas/InsurancePolicySchema'

const AddInsurance: FC = () => {
	const { carId } = useParams()
	const { mutateAsync: createInsurance, isPending } = useCreateInsurance()

	const { control, handleSubmit } = useForm<Fields>(Validation)

	const submitCreateInsurance = useSubmit<
		InsurancePolicy | null,
		AddInsuranceParams
	>({
		callback: createInsurance,
		successMessage: 'The insurance has been successfully created',
		isCloseModal: true,
	})

	const onSubmit: SubmitHandler<Fields> = async (data) => {
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
			<>
				<Title fontSize={24} textAlign="left" color="black">
					Payment
				</Title>
				<Switch
					control={control}
					label="Was the insurance policy paid in full or was it split into parts?"
					name="paymentStatus.isPaid"
					margin="0 0 15px 0"
					rules={{ required: true }}
					defaultValue={false}
				/>
				<RangeInput
					control={control}
					label="Number of rats"
					name="paymentStatus.installmentsCount"
					width="100%"
					margin="0 0 15px 0"
					min={insuranceRules.paymentStatus.installmentsCount.min}
					max={insuranceRules.paymentStatus.installmentsCount.max}
					defaultValue={4}
				/>
				<NumberInput
					control={control}
					label="Cost of the rata"
					name="paymentStatus.installmentCost"
					width="100%"
					margin="0 0 15px 0"
					placeholder={insuranceRules.paymentStatus.installmentCost.placeholder}
					defaultValue={0}
					rules={{
						min: insuranceRules.paymentStatus.installmentCost.min,
						max: insuranceRules.paymentStatus.installmentCost.max,
					}}
				/>
				<NumberInput
					control={control}
					label="Total cost for payment of all rats"
					name="paymentStatus.totalInstallmentsSum"
					width="100%"
					margin="0 0 15px 0"
					placeholder={
						insuranceRules.paymentStatus.totalInstallmentsSum.placeholder
					}
					defaultValue={0}
					rules={{
						min: insuranceRules.paymentStatus.totalInstallmentsSum.min,
						max: insuranceRules.paymentStatus.totalInstallmentsSum.max,
					}}
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

export default AddInsurance
