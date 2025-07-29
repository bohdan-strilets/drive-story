import styled from '@emotion/styled'
import { BsFillFuelPumpFill } from 'react-icons/bs'

import { getFuelColor } from '@/utils/fuelMeta'

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

	color: ${({ fuelType }) => getFuelColor(fuelType)};
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
