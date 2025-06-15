import { BodyType } from '../enums/BodyType'
import { Drivetrain } from '../enums/Drivetrain'
import { FuelType } from '../enums/FuelType'
import { Transmission } from '../enums/Transmission'

import { Image } from './Image'

export type CarBasicInfo = {
	make: string
	model: string
	year: string
	shortName?: string | null
	generation?: string | null
	trimsId?: string | null
}

export type EngineSpecs = {
	volume: number
	power: number
}

export type CarSpecs = {
	mileage: number
	fuelType: FuelType
	transmission: Transmission
	drivetrain: Drivetrain
	bodyType: BodyType
	engine: EngineSpecs
	color?: string | null
	doors?: number
	seats?: number
}

export type CarRegistration = {
	vin?: string | null
	regNumber?: string | null
	firstRegDate?: Date | null
}

export type CarOwnership = {
	purchaseDate?: Date | null
	saleDate?: Date | null
	purchasePrice?: number
	salePrice?: number
	isSold?: boolean
}

export type InsuranceInfo = {
	insuranceId?: string | null
	insuranceEnds?: Date | null
}

export type InspectionInfo = {
	inspectionId?: string | null
	inspectionEnds?: Date | null
}

export type CarEntity = {
	_id: string
	owner: string
	basicInfo: CarBasicInfo
	specifications: CarSpecs
	registration: CarRegistration
	ownership: CarOwnership
	description?: string | null
	photos: string | null | Image
	insurance: InsuranceInfo | null
	inspection: InspectionInfo | null
	createdAt: Date
	updatedAt: Date
}
