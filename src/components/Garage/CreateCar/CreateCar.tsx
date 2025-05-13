import { FC } from 'react'
import {
	FieldPath,
	FormProvider,
	SubmitHandler,
	useForm,
} from 'react-hook-form'

import Button from '@/components/UI/Button'
import Loader from '@/components/UI/Loader'
import Stepper from '@/components/UI/Stepper'

import { useCreateCar } from '@/hooks/car/useCreateCar'
import useSubmit from '@/hooks/ui/useSubmit'
import { useWizard } from '@/hooks/ui/useWizard'

import { CarDetailsDto } from '@/types/dto/CarDetailsDto'
import { CarEntity } from '@/types/types/CarEntity'

import { Fields, Validation } from '@/validation/schemas/CarSchema'

import BasicInfoFields from './BasicInfoFields'
import { Item, List } from './CreateCar.styled'
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

const CreateCar: FC = () => {
	const { mutateAsync: createCar, isPending } = useCreateCar()
	const methods = useForm<Fields>(Validation)

	const { step, maxStep, isFirst, isLast, next, prev } = useWizard<Fields>(
		fieldsByStep,
		methods.trigger
	)

	const submitCreateCar = useSubmit<CarEntity | null, CarDetailsDto>({
		callback: createCar,
		successMessage: 'The car has been successfully created',
		isCloseModal: true,
	})

	const onSubmit: SubmitHandler<Fields> = async (data) => {
		const dto: CarDetailsDto = {
			basicInfo: {
				make: data.basicInfo.make,
				model: data.basicInfo.model,
				year: Number(data.basicInfo.year),
				generation: data.basicInfo.generation,
				shortName: data.basicInfo.shortName,
			},
			specifications: {
				bodyType: data.specifications.bodyType,
				drivetrain: data.specifications.drivetrain,
				fuelType: data.specifications.fuelType,
				transmission: data.specifications.transmission,
				engine: {
					power: Number(data.specifications.engine.power),
					volume: Number(data.specifications.engine.volume),
				},
				mileage: Number(data.specifications.mileage),
				color: data.specifications.color,
				doors: data.specifications.doors,
				seats: data.specifications.seats,
			},
			registration: {
				vin: data.registration.vin,
				regNumber: data.registration.regNumber,
				firstRegDate: data.registration.firstRegDate,
			},
			ownership: {
				purchaseDate: data.ownership.purchaseDate,
				saleDate: data.ownership.saleDate,
			},
			description: data.description,
		}

		submitCreateCar(dto)
	}

	return (
		<FormProvider {...methods}>
			<Stepper currentStep={step} totalSteps={maxStep} />

			<form onSubmit={methods.handleSubmit(onSubmit)}>
				{step === 1 && <BasicInfoFields />}
				{step === 2 && <SpecificationsFields />}
				{step === 3 && <RegistrationFields />}
				{step === 4 && <OwnershipAndDescFields />}

				{isPending && <Loader color="gray" margin="15px 0" />}

				<List>
					<Item>
						<Button
							type="button"
							width="100%"
							margin="0 30px 0 0"
							onClick={prev}
							disabled={isFirst}
							color="white"
							background="black"
							hoverColor="black"
							hoverBackground="yellow"
						>
							Prev
						</Button>
					</Item>
					<Item>
						{!isLast ? (
							<Button
								type="button"
								width="100%"
								onClick={(e) => next(e)}
								color="white"
								background="black"
								hoverColor="black"
								hoverBackground="yellow"
							>
								Next
							</Button>
						) : (
							<Button
								type="submit"
								width="100%"
								color="white"
								background="black"
								hoverColor="black"
								hoverBackground="yellow"
								disabled={isPending}
							>
								{isPending ? '...' : 'create'}
							</Button>
						)}
					</Item>
				</List>
			</form>
		</FormProvider>
	)
}

export default CreateCar
