import { FC, useEffect } from 'react'
import {
	FieldPath,
	FormProvider,
	SubmitHandler,
	useForm,
} from 'react-hook-form'

import FormNavigation from '@/components/UI/FormNavigation'
import Loader from '@/components/UI/Loader'
import Stepper from '@/components/UI/Stepper'

import { useCreateCar } from '@/hooks/car/useCreateCar'
import { useUpdateCar } from '@/hooks/car/useUpdateCar'
import useSubmit from '@/hooks/ui/useSubmit'
import { useWizard } from '@/hooks/ui/useWizard'

import { CarDetailsDto } from '@/types/dto/CarDetailsDto'
import { UpdateCarParams } from '@/types/params/UpdateCarParams'
import { CarFormProps } from '@/types/props/Garage/CarFormProps'
import { CarEntity } from '@/types/types/CarEntity'

import { Fields, Schema, Validation } from '@/validation/schemas/CarSchema'

import BasicInfoFields from './BasicInfoFields'
import OwnershipAndDescFields from './OwnershipAndDescFields'
import RegistrationFields from './RegistrationFields'
import SpecificationsFields from './SpecificationsFields'

const fieldsByStep: Record<number, FieldPath<Fields>[]> = {
	1: [
		'basicInfo.make',
		'basicInfo.model',
		'basicInfo.year',
		'basicInfo.generation',
		'basicInfo.shortName',
	],
	2: [
		'specifications.mileage',
		'specifications.fuelType',
		'specifications.transmission',
		'specifications.drivetrain',
		'specifications.bodyType',
		'specifications.engine.volume',
		'specifications.engine.power',
		'specifications.doors',
		'specifications.seats',
	],
	3: [
		'registration.vin',
		'registration.regNumber',
		'registration.firstRegDate',
	],
	4: ['ownership.purchaseDate', 'ownership.saleDate', 'description'],
}

const CarForm: FC<CarFormProps> = ({ mode, car }) => {
	const methods = useForm<Fields>(Validation)

	useEffect(() => {
		if (car) {
			const params = { stripUnknown: true }
			const initialValues = Schema.cast(car, params) as Fields
			methods.reset(initialValues)
		}
	}, [car, methods])

	const { step, maxStep, isFirst, isLast, next, prev } = useWizard<Fields>(
		fieldsByStep,
		methods.trigger
	)

	const { mutateAsync: updateCar, isPending: isUpdating } = useUpdateCar()
	const { mutateAsync: createCar, isPending: isCreating } = useCreateCar()
	const isLoading = isUpdating || isCreating

	const submitUpdateCar = useSubmit<CarEntity | null, UpdateCarParams>({
		callback: updateCar,
		successMessage: 'The car has been successfully updated',
		isCloseModal: true,
	})

	const submitCreateCar = useSubmit<CarEntity | null, CarDetailsDto>({
		callback: createCar,
		successMessage: 'The car has been successfully created',
		isCloseModal: true,
	})

	const onSubmit: SubmitHandler<Fields> = (data) => {
		const payload: CarDetailsDto = data

		if (mode === 'create') {
			return submitCreateCar(payload)
		}

		const updateCarParams: UpdateCarParams = { payload, carId: car?._id }
		return submitUpdateCar(updateCarParams)
	}

	return (
		<FormProvider {...methods}>
			<Stepper currentStep={step} totalSteps={maxStep} />

			<form onSubmit={methods.handleSubmit(onSubmit)}>
				{step === 1 && <BasicInfoFields />}
				{step === 2 && <SpecificationsFields />}
				{step === 3 && <RegistrationFields />}
				{step === 4 && <OwnershipAndDescFields />}

				{isLoading && <Loader color="gray" margin="15px 0" />}

				<FormNavigation
					isFirst={isFirst}
					isLast={isLast}
					isLoading={isLoading}
					onNext={next}
					onPrev={prev}
					mode={mode}
				/>
			</form>
		</FormProvider>
	)
}

export default CarForm
