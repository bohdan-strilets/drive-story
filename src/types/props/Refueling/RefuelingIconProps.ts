import { RefuelingType } from '@/types/enums/RefuelingType'

export type RefuelingIconProps = {
	fuelType: RefuelingType
}

export type IconProps = Pick<RefuelingIconProps, 'fuelType'>
