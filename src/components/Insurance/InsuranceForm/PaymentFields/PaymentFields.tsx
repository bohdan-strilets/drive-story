import { FC } from 'react'
import { useFormContext } from 'react-hook-form'

import DropdownList from '@/components/UI/DropdownList'
import NumberInput from '@/components/UI/NumberInput'
import Switch from '@/components/UI/Switch'
import Title from '@/components/UI/Title'

import { generateDropdownOptions } from '@/utils/generateDropdownOptions'

import { NumberRates } from '@/types/enums/NumberRates'

import { insuranceRules } from '@/validation/rules/insuranceRules'
import { Fields } from '@/validation/schemas/InsuranceSchema'

const PaymentFields: FC = () => {
	const { control, watch } = useFormContext<Fields>()
	const isPaid = watch('paymentStatus.isPaid')

	const numberRates = Object.values(NumberRates)
	const numberRatsOptions = generateDropdownOptions(numberRates)

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
			<NumberInput
				control={control}
				label="Total cost for payment of all rats"
				name="paymentStatus.totalInstallmentsSum"
				width="100%"
				margin="0 0 15px 0"
				defaultValue={0}
				rules={{
					min: insuranceRules.paymentStatus.totalInstallmentsSum.min,
					max: insuranceRules.paymentStatus.totalInstallmentsSum.max,
				}}
			/>
			{!isPaid && (
				<DropdownList
					control={control}
					options={numberRatsOptions}
					label="Number of rates"
					name="paymentStatus.installmentsCount"
					width="100%"
					margin="0 0 15px 0"
					placeholder="Rates"
				/>
			)}
		</>
	)
}

export default PaymentFields
