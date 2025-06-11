import { FC } from 'react'

import { FuelType } from '@/types/enums/FuelType'
import { RefuelingIconProps } from '@/types/props/Refueling/RefuelingIconProps'

import { Icon, Label, Wrapper } from './RefuelingIcon.styled'

const RefuelingIcon: FC<RefuelingIconProps> = ({ fuelType }) => {
	let fuelLabel: string = ''

	switch (fuelType) {
		case FuelType.DIESEL:
			fuelLabel = 'ON'
			break

		case FuelType.DIESEL_HYBRID:
			fuelLabel = 'ON'
			break

		case FuelType.GASOLINE:
			fuelLabel = 'PB'
			break

		case FuelType.GASOLINE_HYBRID:
			fuelLabel = 'PB'
			break

		case FuelType.GASOLINE_GAS:
			fuelLabel = 'LPG'
			break

		case FuelType.ELECTRIC:
			fuelLabel = 'AC'
			break

		default:
			break
	}

	return (
		<Wrapper>
			<Icon fuelType={fuelType} />
			<Label>{fuelLabel}</Label>
		</Wrapper>
	)
}

export default RefuelingIcon
