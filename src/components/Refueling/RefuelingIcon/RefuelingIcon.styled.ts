import styled from '@emotion/styled'
import { BsFillFuelPumpFill } from 'react-icons/bs'

import { FuelType } from '@/types/enums/FuelType'

import { getColor } from '@/styles/helpers/getColor'

export const Wrapper = styled.div`
	position: relative;
	display: inline-flex;
`

export const Icon = styled(BsFillFuelPumpFill)<{ fuelType: FuelType }>`
	width: 74px;
	height: 74px;

	color: ${({ fuelType }) => {
		switch (fuelType) {
			case FuelType.DIESEL:
				return getColor('#7f8c8d')

			case FuelType.DIESEL_HYBRID:
				return getColor('#4b6f63')

			case FuelType.GASOLINE:
				return getColor('#27ae60')

			case FuelType.GASOLINE_HYBRID:
				return getColor('#2ecc71')

			case FuelType.GASOLINE_GAS:
				return getColor('#2980b9')

			case FuelType.ELECTRIC:
				return getColor('#00e6ac')

			default:
				return getColor('#95a5a6')
		}
	}};
`

export const Label = styled.span`
	position: absolute;
	top: 75%;
	left: 38%;
	transform: translate(-50%, -50%);

	font-weight: 700;
	font-size: 20px;

	color: ${getColor('white')};
`
