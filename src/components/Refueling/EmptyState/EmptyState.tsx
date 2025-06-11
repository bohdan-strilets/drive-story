import { FC } from 'react'

import ImageBox from '@/components/UI/ImageBox'
import Paragraph from '@/components/UI/Paragraph'
import Title from '@/components/UI/Title'

import useResponsive from '@/hooks/ui/useResponsive'

import gasStation from '@/assets/refueling/gas-station.webp'

const EmptyState: FC = () => {
	const { maxTablet } = useResponsive()

	return (
		<div>
			<Title fontSize={22} textAlign="center" color="yellow">
				Add your first fuel receipt now
			</Title>
			<ImageBox
				imageUrl={gasStation}
				width="100%"
				height={maxTablet ? '300px' : '500px'}
				size="contain"
			/>
			<Paragraph color="black" fontWeight={600} textAlign="center">
				Start tracking your fuel to save money and understand your car better
			</Paragraph>
		</div>
	)
}

export default EmptyState
