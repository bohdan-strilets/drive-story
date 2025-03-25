import { Gender } from '@/types/enums/Gender'

export type UserInformationProps = {
	isActivated: boolean
	email?: string | null
	birthDate?: Date | null
	phoneNumber?: string | null
	gender?: Gender
	country?: string | null
	city?: string | null
	postalCode?: string | null
}
