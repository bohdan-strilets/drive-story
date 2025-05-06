import { BodyType } from '../enums/BodyType'
import { Drivetrain } from '../enums/Drivetrain'
import { FuelType } from '../enums/FuelType'
import { Transmission } from '../enums/Transmission'

export type CarBasicInfoDto = {
	make: string
	model: string
	year: number
	shortName?: string | null
	generation?: string | null
}

export type CarEngineDto = {
	volume: number
	power: number
}

export type CarSpecsDto = {
	mileage: number
	fuelType: FuelType
	transmission: Transmission
	drivetrain: Drivetrain
	bodyType: BodyType
	engine: CarEngineDto
	color?: string
	doors?: number
	seats?: number
}

export type CarRegistrationDto = {
	vin?: string | null
	regNumber?: string | null
	firstRegDate?: Date | null
}

export type CarOwnershipDto = {
	purchaseDate?: Date | null
	saleDate?: Date | null
}

export type CarDetailsDto = {
	basicInfo: CarBasicInfoDto
	specifications: CarSpecsDto
	registration: CarRegistrationDto
	ownership: CarOwnershipDto
	description?: string | null
}
