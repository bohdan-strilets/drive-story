import { BodyType } from '../enums/BodyType'
import { Drivetrain } from '../enums/Drivetrain'
import { FuelType } from '../enums/FuelType'
import { Transmission } from '../enums/Transmission'

import { EngineDto } from './EngineDto'

export type SpecificationsDto = {
	mileage: number
	fuelType: FuelType
	transmission: Transmission
	drivetrain: Drivetrain
	bodyType: BodyType
	engine: EngineDto
	color?: string
	doors?: number
	seats?: number
}
