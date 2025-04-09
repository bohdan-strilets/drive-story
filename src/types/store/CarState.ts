import { Car } from '../types/Car'

export type CarState = {
	car: Car | null
	cars: Car[] | null

	setCar: (car: Car | null) => void
	setCars: (cars: Car[] | null) => void
}
