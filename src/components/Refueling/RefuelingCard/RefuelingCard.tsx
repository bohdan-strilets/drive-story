import { FC } from 'react'

import Paragraph from '@/components/UI/Paragraph'

import useResponsive from '@/hooks/ui/useResponsive'

import { FuelType } from '@/types/enums/FuelType'

import RefuelingIcon from '../RefuelingIcon'

import { Item, List, Wrapper } from './RefuelingCard.styled'

const RefuelingCard: FC = () => {
	const { maxTablet, maxMobile } = useResponsive()

	return (
		<Wrapper>
			<RefuelingIcon fuelType={FuelType.DIESEL_HYBRID} />

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
						44 L
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
						6.30 PLN
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
						277.2 PLN
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
						305.73 PLN
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
						11.06.2025
					</Paragraph>
				</Item>
			</List>
		</Wrapper>
	)
}

export default RefuelingCard
