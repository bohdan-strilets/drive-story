import styled from '@emotion/styled'
import { BsFillFuelPumpFill } from 'react-icons/bs'

import { RefuelingType } from '@/types/enums/RefuelingType'
import { IconProps } from '@/types/props/Refueling/RefuelingIconProps'

import { getColor } from '@/styles/helpers/getColor'

export const Wrapper = styled.div`
	position: relative;
	display: inline-flex;
`

export const Icon = styled(BsFillFuelPumpFill, {
	shouldForwardProp: (prop) => prop !== 'fuelType',
})<IconProps>`
	width: 74px;
	height: 74px;

	color: ${({ fuelType }) => {
		switch (fuelType) {
			case RefuelingType.DIESEL:
				return getColor('#7f8c8d')
			case RefuelingType.PETROL:
				return getColor('#27ae60')
			case RefuelingType.GAS:
				return getColor('#2980b9')
			case RefuelingType.ELECTRIC:
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
