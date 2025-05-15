import { FC } from 'react'
import { useFormContext } from 'react-hook-form'

import NumberInput from '@/components/UI/NumberInput'
import RangeInput from '@/components/UI/RangeInput'
import Switch from '@/components/UI/Switch'
import Title from '@/components/UI/Title'

import { insuranceRules } from '@/validation/rules/insuranceRules'
import { Fields } from '@/validation/schemas/InsuranceSchema'

const PaymentFields: FC = () => {
	const { control } = useFormContext<Fields>()

	return (
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
	)
}

export default PaymentFields
