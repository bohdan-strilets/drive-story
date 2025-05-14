import { FC } from 'react'
import { GiEuropeanFlag } from 'react-icons/gi'

import { LicensePlateProps } from '@/types/props/Garage/LicensePlateProps'

import {
	CountryName,
	LeftSide,
	Number,
	RightSIde,
	Wrapper,
} from './LicensePlate.styled'

const LicensePlate: FC<LicensePlateProps> = ({ licensePlate, margin = '' }) => {
	return (
		<Wrapper margin={margin}>
			<LeftSide>
				<GiEuropeanFlag color="#FFCC00" size={35} />
				<CountryName>PL</CountryName>
			</LeftSide>
			<RightSIde>
				<Number>{licensePlate}</Number>
			</RightSIde>
		</Wrapper>
	)
}

export default LicensePlate
