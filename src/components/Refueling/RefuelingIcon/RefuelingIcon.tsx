import { FC } from 'react'

import { RefuelingType } from '@/types/enums/RefuelingType'
import { RefuelingIconProps } from '@/types/props/Refueling/RefuelingIconProps'

import { Icon, Label, Wrapper } from './RefuelingIcon.styled'

const RefuelingIcon: FC<RefuelingIconProps> = ({ fuelType }) => {
	let fuelLabel: string = ''

	switch (fuelType) {
		case RefuelingType.DIESEL:
			fuelLabel = 'ON'
			break

		case RefuelingType.PETROL:
			fuelLabel = 'PB'
			break

		case RefuelingType.GAS:
			fuelLabel = 'LPG'
			break

		case RefuelingType.ELECTRIC:
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
