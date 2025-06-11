import { FC } from 'react'

import Paragraph from '@/components/UI/Paragraph'

import useResponsive from '@/hooks/ui/useResponsive'

import { parsedDateToString } from '@/utils/parsedDateToString'

import { RefuelingCardProps } from '@/types/props/Refueling/RefuelingCardProps'

import RefuelingIcon from '../RefuelingIcon'

import { Item, List, Wrapper } from './RefuelingCard.styled'

const RefuelingCard: FC<RefuelingCardProps> = ({
	fuelType,
	quantity,
	pricePerUnit,
	totalCost,
	fuelingDate,
}) => {
	const { maxTablet, maxMobile } = useResponsive()

	const priceAllFuel = quantity * pricePerUnit

	return (
		<Wrapper>
			<RefuelingIcon fuelType={fuelType} />

			<List
				margin={maxTablet ? '0 0 15px 0' : ''}
				width={maxMobile ? '100%' : '40%'}
			>
				<Item>
					<Paragraph fontSize={maxTablet ? 14 : 16} color="black">
						Amount of fuel:
					</Paragraph>
					<Paragraph
						fontSize={maxTablet ? 14 : 16}
						color="gray"
						fontWeight={600}
					>
						{quantity} L
					</Paragraph>
				</Item>
				<Item>
					<Paragraph fontSize={maxTablet ? 14 : 16} color="black">
						Price per liter:
					</Paragraph>
					<Paragraph
						fontSize={maxTablet ? 14 : 16}
						color="gray"
						fontWeight={600}
					>
						{pricePerUnit} PLN
					</Paragraph>
				</Item>
				<Item>
					<Paragraph fontSize={maxTablet ? 14 : 16} color="black">
						Price for all fuel:
					</Paragraph>
					<Paragraph
						fontSize={maxTablet ? 14 : 16}
						color="gray"
						fontWeight={600}
					>
						{priceAllFuel.toFixed(2)} PLN
					</Paragraph>
				</Item>
			</List>

			<List width={maxMobile ? '100%' : '40%'}>
				<Item>
					<Paragraph fontSize={maxTablet ? 14 : 16} color="black">
						Total value of the check:
					</Paragraph>
					<Paragraph
						fontSize={maxTablet ? 14 : 16}
						color="gray"
						fontWeight={600}
					>
						{totalCost} PLN
					</Paragraph>
				</Item>
				<Item>
					<Paragraph fontSize={maxTablet ? 14 : 16} color="black">
						Refueling date:
					</Paragraph>
					<Paragraph
						fontSize={maxTablet ? 14 : 16}
						color="gray"
						fontWeight={600}
					>
						{parsedDateToString(fuelingDate)}
					</Paragraph>
				</Item>
			</List>
		</Wrapper>
	)
}

export default RefuelingCard
