import { Image } from '@/types/types/Image'

export type CarCardProps = {
	id: string
	photos: string | null | Image
	make: string
	model: string
	year: number
	bodyType: string
	mileage: number
	engineVolume: number
	fuelType: string
	trnasmission: string
}
