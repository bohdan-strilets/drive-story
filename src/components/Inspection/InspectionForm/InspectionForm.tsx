import { FC, useEffect } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'

import Button from '@/components/UI/Button'
import DatePicker from '@/components/UI/DatePicker'
import Loader from '@/components/UI/Loader'
import Switch from '@/components/UI/Switch'
import TextInput from '@/components/UI/TextInput'

import { useCreateInsspection } from '@/hooks/inspection/useCreateInsspection'
import { useUpdateInspection } from '@/hooks/inspection/useUpdateInspection'
import useSubmit from '@/hooks/ui/useSubmit'

import { routes } from '@/config/routes'

import { InspectionDto } from '@/types/dto/InspectionDto'
import { AddInspectionParams } from '@/types/params/AddInspectionParams'
import { UpdateInspectionParams } from '@/types/params/UpdateInspectionParams'
import { InspectionFormProps } from '@/types/props/Inspection/InspectionFormProps'
import { Inspection } from '@/types/types/Inspection'

import { inspectionRules } from '@/validation/rules/inspectionRules'
import { Fields, Validation } from '@/validation/schemas/InspectionSchema'

const InspectionForm: FC<InspectionFormProps> = ({ mode, inspection }) => {
	const { carId } = useParams()
	const navigate = useNavigate()

	const { control, handleSubmit, reset } = useForm<Fields>(Validation)

	useEffect(() => {
		if (inspection) reset(inspection)
	}, [inspection, reset])

	const { mutateAsync: updateInspection, isPending: isUpdating } =
		useUpdateInspection()
	const { mutateAsync: createInsspection, isPending: isCreating } =
		useCreateInsspection()

	const isLoading = isUpdating || isCreating

	const submitUpdateInspection = useSubmit<
		Inspection | null,
		UpdateInspectionParams
	>({
		callback: updateInspection,
		successMessage: 'The inspection has been successfully updated',
		isCloseModal: true,
	})

	const submitCreateInspection = useSubmit<
		Inspection | null,
		AddInspectionParams
	>({
		callback: createInsspection,
		successMessage: 'The inspection has been successfully created',
		isCloseModal: true,
	})

	const onSubmit: SubmitHandler<Fields> = async (data) => {
		const payload: InspectionDto = data

		const createInpsectionDto: AddInspectionParams = {
			payload,
			carId: carId ?? '',
		}
		const updateInspectionDto: UpdateInspectionParams = {
			payload,
			carId: carId ?? '',
			inspectionId: inspection?._id ?? '',
		}

		const response =
			mode === 'create'
				? await submitCreateInspection(createInpsectionDto)
				: await submitUpdateInspection(updateInspectionDto)

		const inspectionId = response?.data?._id
		navigate(
			`${routes.CAR_INFORMATION}/${carId}${routes.INSPECTION}/${inspectionId}`
		)

		return response
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<DatePicker
				control={control}
				label="Date of technical inspection"
				name="inspectionDate"
				placeholder="Date of the event"
				width="100%"
				margin="0 0 15px 0"
				rules={{
					required: true,
					minDate: inspectionRules.inspectionDate.min,
					maxDate: inspectionRules.inspectionDate.max,
				}}
			/>
			<TextInput
				control={control}
				label="Name of the organization conducting the technical inspection"
				name="organization"
				type="text"
				width="100%"
				margin="0 0 15px 0"
				rules={{
					required: true,
					minLength: inspectionRules.organization.min,
					maxLength: inspectionRules.organization.max,
				}}
			/>
			<Switch
				control={control}
				label="Technical inspection status"
				name="isInspectionPassed"
				margin="0 0 15px 0"
				rules={{ required: true }}
				defaultValue={false}
			/>
			<DatePicker
				control={control}
				label="Next technical inspection date"
				name="nextInspectionDate"
				placeholder="Date of the event"
				width="100%"
				margin="0 0 15px 0"
				rules={{
					minDate: inspectionRules.nextInspectionDate.min,
					maxDate: inspectionRules.nextInspectionDate.max,
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

export default InspectionForm
