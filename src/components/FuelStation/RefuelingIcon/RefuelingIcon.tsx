import { FC } from 'react'

import { getFuelLabel } from '@/utils/fuelMeta'

import { RefuelingIconProps } from '@/types/props/Refueling/RefuelingIconProps'

import { Icon, Label, Wrapper } from './RefuelingIcon.styled'

const RefuelingIcon: FC<RefuelingIconProps> = ({ fuelType }) => {
	const fuelLabel = getFuelLabel(fuelType)

	return (
		<Wrapper>
			<Icon fuelType={fuelType} />
			<Label>{fuelLabel}</Label>
		</Wrapper>
	)
}

export default RefuelingIcon
