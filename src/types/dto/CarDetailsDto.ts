import {
	CarBasicInfo,
	CarOwnership,
	CarRegistration,
	CarSpecs,
	EngineSpecs,
} from '../types/CarEntity'

export type CarBasicInfoDto = Pick<
	CarBasicInfo,
	'make' | 'model' | 'generation' | 'shortName' | 'year' | 'trimsId'
>

export type CarEngineDto = Pick<EngineSpecs, 'power' | 'volume'>

export type CarSpecsDto = Pick<
	CarSpecs,
	| 'bodyType'
	| 'color'
	| 'doors'
	| 'drivetrain'
	| 'engine'
	| 'fuelType'
	| 'mileage'
	| 'seats'
	| 'transmission'
>

export type CarRegistrationDto = Pick<
	CarRegistration,
	'firstRegDate' | 'regNumber' | 'vin'
>

export type CarOwnershipDto = Pick<
	CarOwnership,
	'purchaseDate' | 'saleDate' | 'purchasePrice' | 'salePrice'
>

export type CarDetailsDto = {
	basicInfo: CarBasicInfoDto
	specifications: CarSpecsDto
	registration: CarRegistrationDto
	ownership: CarOwnershipDto
	description?: string | null
}
