import { FC } from 'react'

import useResponsive from '@/hooks/ui/useResponsive'

import garageWebp from '@/assets/ui/garage.webp'

import { ErrorMessageProps } from '@/types/props/UI/ErrorMessageProps'

import ImageBox from '../ImageBox'
import Paragraph from '../Paragraph'

const ErrorMessage: FC<ErrorMessageProps> = ({ message }) => {
	const { maxTablet } = useResponsive()

	return (
		<>
			<Paragraph color="red" fontWeight={600} textAlign="center" fontSize={20}>
				{message}
			</Paragraph>
			<ImageBox
				imageUrl={garageWebp}
				width="100%"
				height={maxTablet ? '300px' : '500px'}
				size="contain"
			/>
		</>
	)
}

export default ErrorMessage
