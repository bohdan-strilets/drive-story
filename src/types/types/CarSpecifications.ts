import { BodyType } from '../enums/BodyType'
import { Drivetrain } from '../enums/Drivetrain'
import { FuelType } from '../enums/FuelType'
import { Transmission } from '../enums/Transmission'

import { CarEngine } from './CarEngine'

export type CarSpecifications = {
	mileage: number
	fuelType: FuelType
	transmission: Transmission
	drivetrain: Drivetrain
	bodyType: BodyType
	engine: CarEngine
	color?: string | null
	doors?: number
	seats?: number
}
