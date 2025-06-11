import { FC, useEffect } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import Button from '@/components/UI/Button'
import DatePicker from '@/components/UI/DatePicker'
import DropdownList from '@/components/UI/DropdownList'
import Loader from '@/components/UI/Loader'
import NumberInput from '@/components/UI/NumberInput'

import { useCreateFueling } from '@/hooks/fueling/useCreateFueling'
import { useUpdateFueling } from '@/hooks/fueling/useUpdateFueling'
import useSubmit from '@/hooks/ui/useSubmit'

import { generateDropdownOptions } from '@/utils/generateDropdownOptions'

import { FuelingDto } from '@/types/dto/FuelingDto'
import { RefuelingType } from '@/types/enums/RefuelingType'
import { AddParams } from '@/types/params/AddParams'
import { UpdateParams } from '@/types/params/UpdateParams'
import { RefuelingFormProps } from '@/types/props/Refueling/RefuelingFormProps'
import { Fueling } from '@/types/types/Fueling'

import { fuelingRules } from '@/validation/rules/fuelingRules'
import { Fields, Schema, Validation } from '@/validation/schemas/FuelingSchema'

const RefuelingForm: FC<RefuelingFormProps> = ({ mode, carId, refueling }) => {
	const { control, handleSubmit, reset } = useForm<Fields>(Validation)

	useEffect(() => {
		if (refueling) {
			const params = { stripUnknown: true }
			const initialValues = Schema.cast(refueling, params) as Fields
			reset(initialValues)
		}
	}, [refueling, reset])

	const { mutateAsync: updateFueling, isPending: isUpdating } =
		useUpdateFueling()
	const { mutateAsync: createFueling, isPending: isCreating } =
		useCreateFueling()

	const isLoading = isUpdating || isCreating

	const submitUpdateFueling = useSubmit<
		Fueling | null,
		UpdateParams<FuelingDto>
	>({
		callback: updateFueling,
		successMessage: 'The fueling has been successfully updated',
		isCloseModal: true,
	})

	const submitCreateFueling = useSubmit<Fueling | null, AddParams<FuelingDto>>({
		callback: createFueling,
		successMessage: 'The fueling has been successfully created',
		isCloseModal: true,
	})

	const onSubmit: SubmitHandler<Fields> = async (data) => {
		const payload: FuelingDto = data

		if (mode === 'create') {
			const addFuelingParams: AddParams<FuelingDto> = { payload, carId }
			return await submitCreateFueling(addFuelingParams)
		}

		const updateFuelingParams: UpdateParams<FuelingDto> = {
			payload,
			entityId: refueling!._id,
		}

		return await submitUpdateFueling(updateFuelingParams)
	}

	const refuelingType = Object.values(RefuelingType)
	const refuelingTypeOptions = generateDropdownOptions(refuelingType)

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<DropdownList
				control={control}
				options={refuelingTypeOptions}
				label="Type of fuel"
				name="fuelType"
				width="100%"
				margin="0 0 15px 0"
				placeholder="Type of insurance"
				rules={{ required: true }}
			/>
			<NumberInput
				control={control}
				label="Amount of fuel"
				name="quantity"
				width="100%"
				margin="0 0 15px 0"
				rules={{
					required: true,
					min: fuelingRules.quantity.min,
					max: fuelingRules.quantity.max,
					step: 0.1,
				}}
				defaultValue={0}
			/>
			<NumberInput
				control={control}
				label="Price per liter of fuel"
				name="pricePerUnit"
				width="100%"
				margin="0 0 15px 0"
				rules={{
					required: true,
					min: fuelingRules.pricePerUnit.min,
					max: fuelingRules.pricePerUnit.max,
					step: 0.1,
				}}
				defaultValue={0}
			/>
			<NumberInput
				control={control}
				label="Total value of the check"
				name="totalCost"
				width="100%"
				margin="0 0 15px 0"
				rules={{
					required: true,
					min: fuelingRules.totalCost.min,
					max: fuelingRules.totalCost.max,
					step: 0.1,
				}}
				defaultValue={0}
			/>
			<DatePicker
				control={control}
				label="Date of the refueling session"
				name="fuelingDate"
				placeholder="Date of the refueling"
				width="100%"
				margin="0 0 15px 0"
				rules={{
					required: true,
					minDate: fuelingRules.fuelingDate.min,
					maxDate: fuelingRules.fuelingDate.max,
				}}
			/>

			{isLoading && <Loader color="gray" margin="15px 0" />}

			<Button
				background="yellow"
				color="black"
				hoverBackground="gray"
				hoverColor="white"
				width="100%"
				type="submit"
				disabled={isLoading}
			>
				{isLoading ? '...' : mode === 'create' ? 'create' : 'save'}
			</Button>
		</form>
	)
}

export default RefuelingForm
