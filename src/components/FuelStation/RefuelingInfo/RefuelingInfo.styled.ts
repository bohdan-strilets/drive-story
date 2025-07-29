import styled from '@emotion/styled'
import { motion } from 'motion/react'

import { getFuelColor } from '@/utils/fuelMeta'

import { FuelTypeProps } from '@/types/props/Refueling/RefuelingInfoProps'

import { getColor } from '@/styles/helpers/getColor'
import { breakpoints } from '@/styles/media/breakpoints'
import { flexCenterDirection } from '@/styles/mixins/flexCenterDirection'
import { informationWrapper } from '@/styles/mixins/informationWrapper'
import { itemInformationContainer } from '@/styles/mixins/itemInformationContainer'
import { sideMenuWrapper } from '@/styles/mixins/sideMenuWrapper'

export const FuelType = styled(motion.div)<FuelTypeProps>`
	position: absolute;
	top: 50%;
	left: 10px;
	transform: translateY(-50%);

	${flexCenterDirection('column')}

	font-weight: 700;
	font-size: 28px;

	padding: 0 15px;
	height: 80%;

	color: ${({ fuelType }) => getFuelColor(fuelType)};
	background-color: ${getColor('rgba(0, 0, 0, 0.4)')};
	backdrop-filter: var(--blur-effect);
	border: 3px solid #eecd10d1;
	border-radius: 5px;
	box-shadow: 1px 1px 7px 2px rgba(238, 205, 16, 0.8);
	text-shadow: var(--text-shadow);

	@media screen and (min-width: ${breakpoints.tabletMin}) {
		left: 40px;

		font-size: 50px;

		padding: 0 35px;
		height: 90%;
	}
`

export const Price = styled.p`
	font-size: 16px;

	@media screen and (min-width: ${breakpoints.tabletMin}) {
		font-size: 24px;
	}
`

export const Container = styled.div`
	margin-top: 15px;
	${itemInformationContainer()}
`

export const InformationWrapper = styled.div`
	${informationWrapper()}
`

export const SideMenu = styled.div`
	${sideMenuWrapper()}
`
