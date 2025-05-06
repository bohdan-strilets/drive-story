import { FC, useEffect } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import Button from '@/components/UI/Button'
import DatePicker from '@/components/UI/DatePicker'
import DropdownList from '@/components/UI/DropdownList'
import Loader from '@/components/UI/Loader'
import NumberInput from '@/components/UI/NumberInput'
import RangeInput from '@/components/UI/RangeInput'
import TextInput from '@/components/UI/TextInput'
import Textarea from '@/components/UI/Textarea'
import Title from '@/components/UI/Title'

import { useCreateCar } from '@/hooks/car/useCreateCar'
import useSubmit from '@/hooks/ui/useSubmit'

import { generateDropdownOptions } from '@/utils/generateDropdownOptions'

import { CarDetailsDto } from '@/types/dto/CarDetailsDto'
import { BodyType } from '@/types/enums/BodyType'
import { Drivetrain } from '@/types/enums/Drivetrain'
import { FuelType } from '@/types/enums/FuelType'
import { Transmission } from '@/types/enums/Transmission'
import { CarEntity } from '@/types/types/CarEntity'

import { CarFields, CarValidation } from '@/validation/CarSchema'

const AddCar: FC = () => {
	const { mutateAsync: createCar, isPending } = useCreateCar()
	const { control, handleSubmit, setValue, watch } =
		useForm<CarFields>(CarValidation)

	const yearIssue = watch('basicInfo.year')

	useEffect(() => {
		if (yearIssue) {
			setValue('registration.firstRegDate', new Date(`${yearIssue}-01-01`), {
				shouldValidate: true,
				shouldDirty: true,
			})
		}
	}, [yearIssue, setValue])

	const submitCreateCar = useSubmit<CarEntity | null, CarDetailsDto>({
		callback: createCar,
		successMessage: 'The car has been successfully created',
		isCloseModal: true,
	})

	const onSubmit: SubmitHandler<CarFields> = async (data) => {
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

	const fuelType = Object.values(FuelType)
	const fuelTypeDropdownOptions = generateDropdownOptions(fuelType)

	const transmission = Object.values(Transmission)
	const transmissionDropdownOptions = generateDropdownOptions(transmission)

	const drivetrain = Object.values(Drivetrain)
	const drivetrainDropdownOptions = generateDropdownOptions(drivetrain)

	const bodyType = Object.values(BodyType)
	const bodyTypeDropdownOptions = generateDropdownOptions(bodyType)

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<>
				<Title fontSize={24} textAlign="left" color="black">
					Basic information
				</Title>
				<TextInput<CarFields>
					control={control}
					label="Make"
					name="basicInfo.make"
					type="text"
					width="100%"
					margin="0 0 15px 0"
					placeholder="Audi"
					rules={{ required: true, minLength: 2, maxLength: 50 }}
					isShowCharCounter={true}
				/>
				<TextInput<CarFields>
					control={control}
					label="Model"
					name="basicInfo.model"
					type="text"
					width="100%"
					margin="0 0 15px 0"
					placeholder="A6"
					rules={{ required: true, minLength: 2, maxLength: 50 }}
					isShowCharCounter={true}
				/>
				<NumberInput<CarFields>
					control={control}
					label="Year"
					name="basicInfo.year"
					width="100%"
					margin="0 0 15px 0"
					placeholder="2004"
					rules={{ required: true, max: new Date().getFullYear() }}
					defaultValue={new Date().getFullYear()}
				/>
				<TextInput<CarFields>
					control={control}
					label="Generation"
					name="basicInfo.generation"
					type="text"
					width="100%"
					margin="0 0 15px 0"
					placeholder="C6"
					rules={{ minLength: 1, maxLength: 50 }}
					isShowCharCounter={true}
				/>
				<TextInput<CarFields>
					control={control}
					label="Short name"
					name="basicInfo.shortName"
					type="text"
					width="100%"
					margin="0 0 15px 0"
					placeholder="Black shark"
					rules={{ minLength: 2, maxLength: 50 }}
					isShowCharCounter={true}
				/>
			</>
			<>
				<Title fontSize={24} textAlign="left" color="black">
					Specifications
				</Title>
				<NumberInput<CarFields>
					control={control}
					label="Mileage"
					name="specifications.mileage"
					width="100%"
					margin="0 0 15px 0"
					placeholder="2004"
					rules={{ required: true, min: 0 }}
					defaultValue={0}
				/>
				<DropdownList<CarFields>
					control={control}
					options={fuelTypeDropdownOptions}
					label="Fuel type"
					name="specifications.fuelType"
					width="100%"
					margin="0 0 15px 0"
					placeholder="Select fuel type"
					rules={{ required: true }}
				/>
				<DropdownList<CarFields>
					control={control}
					options={transmissionDropdownOptions}
					label="Transmission"
					name="specifications.transmission"
					width="100%"
					margin="0 0 15px 0"
					placeholder="Select transmission"
					rules={{ required: true }}
				/>
				<DropdownList<CarFields>
					control={control}
					options={drivetrainDropdownOptions}
					label="Drivetrain"
					name="specifications.drivetrain"
					width="100%"
					margin="0 0 15px 0"
					placeholder="Select drivetrain"
					rules={{ required: true }}
				/>
				<DropdownList<CarFields>
					control={control}
					options={bodyTypeDropdownOptions}
					label="Body type"
					name="specifications.bodyType"
					width="100%"
					margin="0 0 15px 0"
					placeholder="Select body type"
					rules={{ required: true }}
				/>
				<NumberInput<CarFields>
					control={control}
					label="Engine volume"
					name="specifications.engine.volume"
					width="100%"
					margin="0 0 15px 0"
					placeholder="1999"
					rules={{ required: true }}
					defaultValue={0}
				/>
				<NumberInput<CarFields>
					control={control}
					label="Engine power"
					name="specifications.engine.power"
					width="100%"
					margin="0 0 15px 0"
					placeholder="150"
					rules={{ required: true }}
					defaultValue={0}
				/>
				<RangeInput<CarFields>
					control={control}
					label="Number of doors"
					name="specifications.doors"
					width="100%"
					margin="0 0 15px 0"
					min={2}
					max={6}
					defaultValue={5}
				/>
				<RangeInput<CarFields>
					control={control}
					label="Number of seats"
					name="specifications.seats"
					width="100%"
					margin="0 0 15px 0"
					min={1}
					max={9}
					defaultValue={5}
				/>
			</>
			<>
				<Title fontSize={24} textAlign="left" color="black">
					Registration details
				</Title>
				<TextInput<CarFields>
					control={control}
					label="Vin number"
					name="registration.vin"
					type="text"
					width="100%"
					margin="0 0 15px 0"
					placeholder="VU563************"
					rules={{ maxLength: 17 }}
					isShowCharCounter={true}
				/>
				<TextInput<CarFields>
					control={control}
					label="Registration number"
					name="registration.regNumber"
					type="text"
					width="100%"
					margin="0 0 15px 0"
					placeholder="VOI2589K"
					rules={{ minLength: 1, maxLength: 15 }}
					isShowCharCounter={true}
				/>
				<DatePicker<CarFields>
					control={control}
					name="registration.firstRegDate"
					label="Date of first registration"
					placeholder="Select date"
					width="100%"
					margin="0 0 15px 0"
					defaultValue={new Date()}
				/>
			</>
			<>
				<Title fontSize={24} textAlign="left" color="black">
					Owner details
				</Title>
				<DatePicker<CarFields>
					control={control}
					name="ownership.purchaseDate"
					label="Date of purchase"
					placeholder="Select date"
					width="100%"
					margin="0 0 15px 0"
					defaultValue={new Date()}
				/>
				<DatePicker<CarFields>
					control={control}
					name="ownership.saleDate"
					label="Date of sale (Leave the current date as is if the car has not been sold yet)"
					placeholder="Select date"
					width="100%"
					margin="0 0 15px 0"
					defaultValue={new Date()}
				/>
			</>
			<>
				<Title fontSize={24} textAlign="left" color="black">
					Short description
				</Title>
				<Textarea<CarFields>
					control={control}
					name="description"
					label="A few words about the car"
					placeholder="A little story about your car..."
					width="100%"
					margin="0 0 15px 0"
					rules={{ minLength: 20, maxLength: 500 }}
					isShowCharCounter={true}
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

export default AddCar
