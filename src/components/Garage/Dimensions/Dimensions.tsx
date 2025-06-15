import { FC } from 'react'

import Arrow from '@/components/UI/Arrow'
import Paragraph from '@/components/UI/Paragraph'

import useResponsive from '@/hooks/ui/useResponsive'

import yellowCar from '@/assets/garage/yellow-car.webp'

import { DimensionsProps } from '@/types/props/Garage/DimensionsProps'

import { Weight, WeightIcon, Wrapper } from './Dimensions.styled'

const Dimensions: FC<DimensionsProps> = ({
	length,
	height,
	wheelbase,
	weight,
}) => {
	const { minTablet, maxTablet } = useResponsive()

	return (
		<Wrapper>
			<img src={yellowCar} alt="yellow car" />

			{Number(length) > 0 && (
				<Arrow
					value={length}
					orientation="horizontal"
					color="gray"
					width={minTablet && maxTablet ? '83%' : '78%'}
					height="2px"
					position={{
						top: minTablet && maxTablet ? '80px' : '30px',
						left: minTablet && maxTablet ? '75px' : '34px',
					}}
				/>
			)}

			{Number(height) > 0 && (
				<Arrow
					value={height}
					orientation="vertical"
					color="gray"
					width="20%"
					height="2px"
					position={{
						top: minTablet && maxTablet ? '50%' : '48%',
						left: minTablet && maxTablet ? '-40px' : '-25px',
					}}
				/>
			)}

			{Number(wheelbase) > 0 && (
				<Arrow
					value={wheelbase}
					orientation="horizontal"
					color="gray"
					width={minTablet && maxTablet ? '45%' : '43%'}
					height="2px"
					position={{
						bottom: minTablet && maxTablet ? '120px' : '30px',
						left: minTablet && maxTablet ? '220px' : '98px',
					}}
				/>
			)}

			{Number(weight) > 0 && (
				<Weight>
					<Paragraph color="gray" fontWeight={700}>
						{weight}
					</Paragraph>
					<WeightIcon />
				</Weight>
			)}
		</Wrapper>
	)
}

export default Dimensions
