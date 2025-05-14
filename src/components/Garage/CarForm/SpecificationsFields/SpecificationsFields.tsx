import { FC } from 'react'
import { useFormContext } from 'react-hook-form'

import DropdownList from '@/components/UI/DropdownList'
import NumberInput from '@/components/UI/NumberInput'
import RangeInput from '@/components/UI/RangeInput'
import Title from '@/components/UI/Title'

import { generateDropdownOptions } from '@/utils/generateDropdownOptions'

import { BodyType } from '@/types/enums/BodyType'
import { Drivetrain } from '@/types/enums/Drivetrain'
import { FuelType } from '@/types/enums/FuelType'
import { Transmission } from '@/types/enums/Transmission'

import { carRules } from '@/validation/rules/carRules'
import { Fields } from '@/validation/schemas/CarSchema'

const SpecificationsFields: FC = () => {
	const { control } = useFormContext<Fields>()

	const fuelType = Object.values(FuelType)
	const fuelTypeDropdownOptions = generateDropdownOptions(fuelType)

	const transmission = Object.values(Transmission)
	const transmissionDropdownOptions = generateDropdownOptions(transmission)

	const drivetrain = Object.values(Drivetrain)
	const drivetrainDropdownOptions = generateDropdownOptions(drivetrain)

	const bodyType = Object.values(BodyType)
	const bodyTypeDropdownOptions = generateDropdownOptions(bodyType)

	return (
		<>
			<Title fontSize={24} textAlign="left" color="black">
				Technical Specifications
			</Title>
			<NumberInput
				control={control}
				label="Mileage (km)"
				name="specifications.mileage"
				width="100%"
				margin="0 0 15px 0"
				rules={{
					required: true,
					min: carRules.specifications.mileage.min,
					max: carRules.specifications.mileage.max,
				}}
				defaultValue={0}
			/>
			<DropdownList
				control={control}
				options={fuelTypeDropdownOptions}
				label="Fuel type"
				name="specifications.fuelType"
				width="100%"
				margin="0 0 15px 0"
				placeholder="Choose fuel type"
				rules={{ required: true }}
			/>
			<DropdownList
				control={control}
				options={transmissionDropdownOptions}
				label="Transmission"
				name="specifications.transmission"
				width="100%"
				margin="0 0 15px 0"
				placeholder="Choose transmission"
				rules={{ required: true }}
			/>
			<DropdownList
				control={control}
				options={drivetrainDropdownOptions}
				label="Drivetrain"
				name="specifications.drivetrain"
				width="100%"
				margin="0 0 15px 0"
				placeholder="Choose drivetrain"
				rules={{ required: true }}
			/>
			<DropdownList
				control={control}
				options={bodyTypeDropdownOptions}
				label="Body style"
				name="specifications.bodyType"
				width="100%"
				margin="0 0 15px 0"
				placeholder="Choose body style"
				rules={{ required: true }}
			/>
			<NumberInput
				control={control}
				label="Engine Displacement (cm³)"
				name="specifications.engine.volume"
				width="100%"
				margin="0 0 15px 0"
				rules={{
					required: true,
					min: carRules.specifications.engine.volume.min,
					max: carRules.specifications.engine.volume.max,
				}}
				defaultValue={0}
			/>
			<NumberInput
				control={control}
				label="Engine Power (hp)"
				name="specifications.engine.power"
				width="100%"
				margin="0 0 15px 0"
				rules={{
					required: true,
					min: carRules.specifications.engine.power.min,
					max: carRules.specifications.engine.power.max,
				}}
				defaultValue={0}
			/>
			<RangeInput
				control={control}
				label="Doors"
				name="specifications.doors"
				width="100%"
				margin="0 0 15px 0"
				min={carRules.specifications.doors.min}
				max={carRules.specifications.doors.max}
				defaultValue={5}
			/>
			<RangeInput
				control={control}
				label="Seats"
				name="specifications.seats"
				width="100%"
				margin="0 0 15px 0"
				min={carRules.specifications.seats.min}
				max={carRules.specifications.seats.max}
				defaultValue={5}
			/>
		</>
	)
}

export default SpecificationsFields
