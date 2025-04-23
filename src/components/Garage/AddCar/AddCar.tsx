import { FC } from 'react'
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

import {
	formatValue,
	generateDropdownOptions,
} from '@/utils/generateDropdownOptions'

import { CarDto } from '@/types/dto/CarDto'
import { BodyType } from '@/types/enums/BodyType'
import { Drivetrain } from '@/types/enums/Drivetrain'
import { FuelType } from '@/types/enums/FuelType'
import { Transmission } from '@/types/enums/Transmission'
import { Car } from '@/types/types/Car'

import { AddCarFields, AddCarValidation } from '@/validation/AddCarSchema'

const AddCar: FC = () => {
	const { mutateAsync: createCar, isPending } = useCreateCar()
	const { control, handleSubmit } = useForm<AddCarFields>(AddCarValidation)

	const submitCreateCar = useSubmit<Car | null, CarDto>({
		callback: createCar,
		successMessage: 'The car has been successfully created',
		isCloseModal: true,
	})

	const onSubmit: SubmitHandler<AddCarFields> = async (data) => {
		const dto: CarDto = {
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
				<TextInput<AddCarFields>
					control={control}
					label="Make"
					name="basicInfo.make"
					type="text"
					width="100%"
					margin="0 0 15px 0"
					placeholder="Audi"
					rules={{ required: true }}
				/>
				<TextInput<AddCarFields>
					control={control}
					label="Model"
					name="basicInfo.model"
					type="text"
					width="100%"
					margin="0 0 15px 0"
					placeholder="A6"
					rules={{ required: true }}
				/>
				<NumberInput<AddCarFields>
					control={control}
					label="Year"
					name="basicInfo.year"
					width="100%"
					margin="0 0 15px 0"
					placeholder="2004"
					rules={{ required: true, max: new Date().getFullYear() }}
					defaultValue={new Date().getFullYear()}
				/>
				<TextInput<AddCarFields>
					control={control}
					label="Generation"
					name="basicInfo.generation"
					type="text"
					width="100%"
					margin="0 0 15px 0"
					placeholder="C6"
				/>
				<TextInput<AddCarFields>
					control={control}
					label="Short name"
					name="basicInfo.shortName"
					type="text"
					width="100%"
					margin="0 0 15px 0"
					placeholder="Black shark"
				/>
			</>
			<>
				<Title fontSize={24} textAlign="left" color="black">
					Specifications
				</Title>
				<NumberInput<AddCarFields>
					control={control}
					label="Mileage"
					name="specifications.mileage"
					width="100%"
					margin="0 0 15px 0"
					placeholder="2004"
					rules={{ required: true, min: 0 }}
					defaultValue={1}
				/>
				<DropdownList<AddCarFields>
					control={control}
					options={fuelTypeDropdownOptions}
					label="Fuel type"
					name="specifications.fuelType"
					width="100%"
					margin="0 0 15px 0"
					placeholder="Select fuel type"
					rules={{ required: true }}
					defaultValue={formatValue(FuelType.NOT_SELECTED)}
				/>
				<DropdownList<AddCarFields>
					control={control}
					options={transmissionDropdownOptions}
					label="Transmission"
					name="specifications.transmission"
					width="100%"
					margin="0 0 15px 0"
					placeholder="Select transmission"
					rules={{ required: true }}
				/>
				<DropdownList<AddCarFields>
					control={control}
					options={drivetrainDropdownOptions}
					label="Drivetrain"
					name="specifications.drivetrain"
					width="100%"
					margin="0 0 15px 0"
					placeholder="Select drivetrain"
					rules={{ required: true }}
				/>
				<DropdownList<AddCarFields>
					control={control}
					options={bodyTypeDropdownOptions}
					label="Body type"
					name="specifications.bodyType"
					width="100%"
					margin="0 0 15px 0"
					placeholder="Select body type"
					rules={{ required: true }}
				/>
				<NumberInput<AddCarFields>
					control={control}
					label="Engine volume"
					name="specifications.engine.volume"
					width="100%"
					margin="0 0 15px 0"
					placeholder="1999"
					rules={{ required: true }}
				/>
				<NumberInput<AddCarFields>
					control={control}
					label="Engine power"
					name="specifications.engine.power"
					width="100%"
					margin="0 0 15px 0"
					placeholder="150"
					rules={{ required: true }}
				/>
				<RangeInput<AddCarFields>
					control={control}
					label="Number of doors"
					name="specifications.doors"
					width="100%"
					margin="0 0 15px 0"
					min={2}
					max={6}
					defaultValue={5}
				/>
				<RangeInput<AddCarFields>
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
				<TextInput<AddCarFields>
					control={control}
					label="Vin number"
					name="registration.vin"
					type="text"
					width="100%"
					margin="0 0 15px 0"
					placeholder="VU563************"
				/>
				<TextInput<AddCarFields>
					control={control}
					label="Registration number"
					name="registration.regNumber"
					type="text"
					width="100%"
					margin="0 0 15px 0"
					placeholder="VOI2589K"
				/>
				<DatePicker<AddCarFields>
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
				<DatePicker<AddCarFields>
					control={control}
					name="ownership.purchaseDate"
					label="Date of purchase"
					placeholder="Select date"
					width="100%"
					margin="0 0 15px 0"
					defaultValue={new Date()}
				/>
				<DatePicker<AddCarFields>
					control={control}
					name="ownership.saleDate"
					label="Date of sale"
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
				<Textarea<AddCarFields>
					control={control}
					name="description"
					label="A few words about the car"
					placeholder="My car is the best..."
					width="100%"
					margin="0 0 15px 0"
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
